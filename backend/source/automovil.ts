import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsISBN, IsNumber, IsString, Matches } from 'class-validator';

export class Alquiler {
    @Expose({ name: "alquiler" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Automovil: number = 0;

    @Expose({ name: "marca" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Marca: string = '';

    @Expose({ name: "modelo" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Modelo: string = '';

    @Expose({ name: "año" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Año: number = 0;

    @Expose({ name: "tipo" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Tipo: String = '';

    @Expose({ name: "capacidad" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Capacidad: number = 0;

    @Expose({ name: "precio_diario" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Precio_Diario: number = 0;

    constructor(data: Partial<Alquiler>) {
        Object.assign(this, data);
    }
}
