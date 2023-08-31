import { Usuario } from "../usuario/usuario";

export class Restaurante {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  facebook: string;
  twitter: string;
  instagram: string;
  hora_atencion: string; //db.Column(db.String(250))
  is_en_lugar: boolean; //db.Column(db.Boolean, unique=False, default=False)
  is_domicilios: boolean; //db.Column(db.Boolean, unique=False, default=False)
  tipo_comida: string; //= db.Column(db.String(200))
  is_rappi: boolean; // db.Column(db.Boolean, unique=False, default=False)
  is_didi: boolean; // db.Column(db.Boolean, unique=False, default=False)
  administrador: number; //db.Column(db.Integer, db.ForeignKey('usuario.id'))


}
