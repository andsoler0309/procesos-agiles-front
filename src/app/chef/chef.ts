import { RecetaIngrediente } from '../receta-ingrediente/receta-ingrediente';

export class Chef {
    id: number;
    nombre: string;

    public constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}
