export interface Libros {
  id:         number;
  titulo: string;
  autor: string | null;
  imagen: string | null;
  resumen: string | null;
  genero: string[] | null; // Changed from 'string' to 'string[]'
  editorial: string | null;
  fecha: string | null;
  paginas: number | null;
  valoracion: number | null;

}




