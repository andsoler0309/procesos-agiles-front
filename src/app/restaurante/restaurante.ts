export class Restaurante {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  facebook: string;
  instagram: string;
  twitter: string;
  tipo_comida: string;
  aplicaciones: string[];

  public constructor(
      id: number,
      nombre: string,
      direccion: string,
      telefono: string,
      facebook: string,
      instagram: string,
      twitter: string,
      tipo_comida: string,
      aplicaciones: string[]
  ) {
      this.id = id;
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.facebook = facebook;
      this.instagram = instagram;
      this.twitter = twitter;
      this.tipo_comida = tipo_comida;
      this.aplicaciones = aplicaciones;
  }
}
