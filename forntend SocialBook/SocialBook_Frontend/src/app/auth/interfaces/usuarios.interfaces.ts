export interface Usuarios {
  id: number,
  Usuario:          string;
  nombre:           string;
  contrasena:       string;
  imagen:           string;
  correo:           string;
  librosFavoritos:  any[];
  resenasFavoritas: any[];
  librosPendientes: any[];
  librosLeidos:     any[];
}
