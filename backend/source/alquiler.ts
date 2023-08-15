import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber, IsString, Matches } from 'class-validator';

export class Alquiler {
    @Expose({ name: "alquiler" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Alquiler: number = 0;;

    @Expose({ name: "cliente" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Cliente: number = 0;;

    @Expose({ name: "automovil" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Automovil: number = 0;;

    @Expose({ name: "fecha_fin" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error en los parametros de entrada'})
    Fecha_Inicio: String = "0000-00-00";;

    @Expose({ name: "fecha_inicio" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Fecha_Fin: String = "0000-00-00";;

    @Expose({ name: "telefono" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Teléfono: number = 0;;

    @Expose({ name: "estados" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Estado: number = 0;;

    @Expose({ name: "total" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Params would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", reference: "https://http.cat/400" } } })
    Costo_total: Number = 0;

    constructor(data: Partial<Alquiler>) {
        Object.assign(this, data);
    }
}
