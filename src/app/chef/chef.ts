import { Restaurante } from '../restaurante/restaurante';

export class Chef {
    id: number;
    nombre: string;
    usuario: string;
    restaurante: Restaurante;

    public constructor(id: number, nombre: string, usuario: string, restaurante: Restaurante) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.restaurante = restaurante;
    }
}
