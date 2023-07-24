import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class User {
    @Expose({ name: 'id' })
    @IsNumber({}, {message: ()=>{ throw {status: 422, message: `El id no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id es obligatorio`}}})
    ID: number;
    @Expose({ name: 'nombre' })
    @IsString({message: ()=>{ throw {status: 422, message: `El nombre no cumple con el formato`}}})
    // @Transform(({ value }) => { if(/^[a-z A-Z]+$/.test(value)) return value ; else throw {status: 422, message: `El datos nombre no cunple con los parametros acordados`};}, { toClassOnly: true })
    nom_com: string; 
    @Expose({ name: 'email' })
    @IsEmail({}, {message: ()=>{ throw {status: 422, message: `El email no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro email es obligatorio`}}})
    // @Transform(({ value }) => { if(/\S+@\S+\.\S+/.test(value)) return value ; else throw {status: 422, message: `El datos email no cunple con los parametros acordados`};}, { toClassOnly: true })
    ema: string;
    @Expose({ name: 'password' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro password es obligatorio`}}})
    @MinLength(8, {message : ()=> { throw {status: 411, message: `El password debe ser mas de 8 caracteres`}}})
    @MaxLength(12, {message : ()=> { throw {status: 411, message: `El password supero el limite :(`}}})
    @Type(() => String)
    psw: string;
    constructor(ID: number, nom_com: string, ema: string, psw: string) {
      this.ID = ID;
      this.nom_com = nom_com;
      this.ema = ema;
      this.psw = psw;
    }
}