import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsISBN, IsNumber, IsString, Matches, isString } from 'class-validator';

export class Sucursal_Automovil {
    @Expose({ name: "reserva" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Sucursal: number = 0;

    @Expose({ name: "cliente" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Automovil: Number = 0;

    @Expose({ name: "automovil" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Cantidad_Disponible: Number = 0;

    constructor(data: Partial<Sucursal_Automovil>) {
        Object.assign(this, data);
    }
}
