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
import { IsDefined, IsNumber } from 'class-validator';
export class Sucursal_Automovil {
    constructor(data) {
        this.ID_Sucursal = 0;
        this.ID_Automovil = 0;
        this.Cantidad_Disponible = 0;
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "reserva" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Sucursal_Automovil.prototype, "ID_Sucursal", void 0);
__decorate([
    Expose({ name: "cliente" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Sucursal_Automovil.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: "automovil" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Sucursal_Automovil.prototype, "Cantidad_Disponible", void 0);
