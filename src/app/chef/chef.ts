import { RecetaIngrediente } from '../receta-ingrediente/receta-ingrediente';

export class Chef {
    id: number;
    nombre: string;
    usuario: string;
    restaurante_id: string;

    public constructor(id: number, nombre: string, usuario: string, restaurante_id: string) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.restaurante_id = restaurante_id;
    }
}
