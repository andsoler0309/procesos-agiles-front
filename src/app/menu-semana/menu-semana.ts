export class MenuSemana{
    nombre: string;
    fecha_inicial: string;
    fecha_final: string;
    recetas: number[];
    id_restaurante: number;

    public constructor(nombre: string, fecha_inicial: string, fecha_final: string, recetas: number[], id_restaurante: number) {
        this.nombre = nombre;
        this.fecha_inicial = fecha_inicial;
        this.fecha_final = fecha_final;
        this.recetas = recetas;
        this.id_restaurante = id_restaurante;
    }
}