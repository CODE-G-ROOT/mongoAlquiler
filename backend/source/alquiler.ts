import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber, IsString, Matches } from 'class-validator';

export class Alquiler {
    @Expose({ name: "alquiler" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Alquiler: number;

    @Expose({ name: "cliente" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Cliente: number;

    @Expose({ name: "automovil" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Automovil: number;

    @Expose({ name: "fecha_fin" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error en los parametros de entrada'})
    Fecha_Inicio: number;

    @Expose({ name: "fecha_inicio" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Fecha_Fin: number;

    @Expose({ name: "telefono" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Teléfono: number;

    @Expose({ name: "estados" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Estado: number;

    @Expose({ name: "total" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Params would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", reference: "https://http.cat/400" } } })
    Costo_total: Number;

    constructor(data: Partial<Alquiler>) {
        Object.assign(this, data);
        this.ID_Alquiler = 0;
        this.ID_Cliente = 0;
        this.ID_Automovil = 0;
        this.Fecha_Inicio = "0000-00-00";
        this.Fecha_Fin = "0000-00-00";
        this.Teléfono = 0;
        this.Costo_total = 0;
        this.Estado = '';
    }
}
