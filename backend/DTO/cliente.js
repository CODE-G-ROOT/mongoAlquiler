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
export class Cliente {
    constructor(data) {
        this.ID_Cliente = 0;
        this.Nombre = '';
        this.Apellido = '';
        this.DNI = 0;
        this.Dirección = '';
        this.Teléfono = 0;
        this.Email = '';
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "Cliente" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Cliente.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: "nombre" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "apellido" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: "dni" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Cliente.prototype, "DNI", void 0);
__decorate([
    Expose({ name: "direccion" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a string", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Direcci\u00F3n", void 0);
__decorate([
    Expose({ name: "tel" }),
    IsNumber({}, { message: () => { throw { status: 400, message: "Param would be a Number", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", Number)
], Cliente.prototype, "Tel\u00E9fono", void 0);
__decorate([
    Expose({ name: "email" }),
    IsString({ message: () => { throw { status: 400, message: "Param would be a String", reference: "https://http.cat/400" }; } }),
    IsDefined({ message: () => { throw { status: 400, message: "The param is required", refernece: "https://http.cat/400" }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Email", void 0);
