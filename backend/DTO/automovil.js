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
import { IsDefined, IsNumber, IsString } from 'class-validator';
export class Automovil {
    constructor(data) {
        this.ID_Automovil = 0;
        this.Marca = '';
        this.Modelo = '';
        this.Año = 0;
        this.Tipo = '';
        this.Capacidad = 0;
        this.Precio_Diario = 0;
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "alquiler" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: "marca" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Marca", void 0);
__decorate([
    Expose({ name: "modelo" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Modelo", void 0);
__decorate([
    Expose({ name: "año" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "A\u00F1o", void 0);
__decorate([
    Expose({ name: "tipo" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: "capacidad" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "Capacidad", void 0);
__decorate([
    Expose({ name: "precio_diario" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "Precio_Diario", void 0);
