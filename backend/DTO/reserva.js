var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString, Matches } from 'class-validator';
export class Reserva {
    constructor(data) {
        this.ID_Reserva = 0;
        this.ID_Cliente = 0;
        this.ID_Automovil = 0;
        this.Fecha_Reserva = '0000-00-00';
        this.Fecha_Inicio = '0000-00-00';
        this.Fecha_Fin = '0000-00-00';
        this.Estado = '';
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "reserva" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "ID_Reserva", void 0);
__decorate([
    Expose({ name: "cliente" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: "automovil" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: "feche_reserva" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error in the Date' }),
    __metadata("design:type", String)
], Reserva.prototype, "Fecha_Reserva", void 0);
__decorate([
    Expose({ name: "fecha_inicio" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error in the Date' }),
    __metadata("design:type", String)
], Reserva.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: "fecha_fin" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error in the Date' }),
    __metadata("design:type", String)
], Reserva.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: "estado" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Reserva.prototype, "Estado", void 0);
