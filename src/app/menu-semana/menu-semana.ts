export class MenuSemana{
    nombre: string;
    fecha_inicial: string;
    fecha_final: string;
    recetas: number[];

    public constructor(nombre: string, fecha_inicial: string, fecha_final: string, recetas: number[]) {
        this.nombre = nombre;
        this.fecha_inicial = fecha_inicial;
        this.fecha_final = fecha_final;
        this.recetas = recetas;
    }
}