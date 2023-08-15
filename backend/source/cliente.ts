import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsISBN, IsNumber, IsString, Matches } from 'class-validator';

export class Cliente {
    @Expose({ name: "Cliente" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Cliente: number = 0;

    @Expose({ name: "nombre" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Nombre: string = '';

    @Expose({ name: "apellido" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Apellido: string = '';

    @Expose({ name: "dni" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    DNI: number = 0;

    @Expose({ name: "direccion" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Dirección: String = '';

    @Expose({ name: "tel" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Teléfono: number = 0;

    @Expose({ name: "email" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Email: String = '';

    constructor(data: Partial<Cliente>) {
        Object.assign(this, data);
    }
}
