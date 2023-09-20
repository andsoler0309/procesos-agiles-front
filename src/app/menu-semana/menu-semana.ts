import { Receta } from "../receta/receta";

export class InfoUsuario {
    usuario: string;
    rol: string;
    public constructor(usuario: string, rol: string) {
        this.usuario = usuario;
        this.rol = rol;
    }
}
export class MenuSemana{
    nombre: string;
    fecha_inicial: string;
    fecha_final: string;
    recetas: number[];
    id_restaurante: number;
    usuario: InfoUsuario;

    public constructor(nombre: string, fecha_inicial: string, fecha_final: string, recetas: number[], id_restaurante: number, usuario: InfoUsuario) {
        this.nombre = nombre;
        this.fecha_inicial = fecha_inicial;
        this.fecha_final = fecha_final;
        this.recetas = recetas;
        this.id_restaurante = id_restaurante;
        this.usuario = usuario;
    }
}

export class MenuSemanaDetalle{
    nombre: string;
    fecha_inicial: string;
    fecha_final: string;
    recetas: Receta[];
    id_restaurante: number;
    usuario: InfoUsuario;

    public constructor(nombre: string, fecha_inicial: string, fecha_final: string, recetas: Receta[], id_restaurante: number, usuario: InfoUsuario) {
        this.nombre = nombre;
        this.fecha_inicial = fecha_inicial;
        this.fecha_final = fecha_final;
        this.recetas = recetas;
        this.id_restaurante = id_restaurante;
        this.usuario = usuario;
    }
}