import { Usuario } from "../usuario/usuario";

export class Restaurante {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  facebook: string;
  twitter: string;
  instagram: string;
  hora_atencion: string;
  is_en_lugar: boolean;
  is_domicilios: boolean;
  tipo_comida: string;
  is_rappi: boolean;
  is_didi: boolean;
  administrador: Usuario;

  public constructor(
    id: number,
    nombre: string,
    direccion: string,
    telefono: string,
    facebook: string,
    twitter: string,
    instagram: string,
    hora_atencion: string,
    is_en_lugar: boolean,
    is_domicilios: boolean,
    tipo_comida: string,
    is_rappi: boolean,
    is_didi: boolean,
    administrador: Usuario
  ) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.facebook = facebook;
    this.twitter = twitter;
    this.instagram = instagram;
    this.hora_atencion = hora_atencion;
    this.is_en_lugar = is_en_lugar;
    this.is_domicilios = is_domicilios;
    this.tipo_comida = tipo_comida;
    this.is_rappi = is_rappi;
    this.is_didi = is_didi;
    this.administrador = administrador;
  }
}
