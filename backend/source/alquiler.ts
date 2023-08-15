import { Expose, Type, Transform } from "class-transformer";
import {
    IsDefined,
    MaxLength,
    MinLength,
    IsNumber,
    IsEmail,
    IsString,
} from "class-validator";

export class autor {
    @Expose({name : "ID_Alquiler"})
    @IsDefined({message()=>{ throw {  status: 204, message: "Found But Without Not Contain", reference: "https://http.cat/204"}}})
    id_
}
