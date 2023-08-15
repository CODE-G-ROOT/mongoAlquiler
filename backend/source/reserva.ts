import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsISBN, IsNumber, IsString, Matches, isString } from 'class-validator';

export class Reserva {
    @Expose({ name: "reserva" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Reserva: number = 0;

    @Expose({ name: "cliente" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Cliente: Number = 0;

    @Expose({ name: "automovil" })
    @IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    ID_Automovil: Number = 0;

    @Expose({ name: "feche_reserva" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error in the Date'})
    Fecha_Reserva: String = '0000-00-00';

    @Expose({ name: "fecha_inicio" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error in the Date'})
    Fecha_Inicio: String = '0000-00-00';

    @Expose({ name: "fecha_fin" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error in the Date'})
    Fecha_Fin: String = '0000-00-00';

    @Expose({ name: "estado" })
    @IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" } } })
    @IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" } } })
    Estado: String = '';

    constructor(data: Partial<Reserva>) {
        Object.assign(this, data);
    }
}
