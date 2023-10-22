export class Juego {
    titulo: String = "";
    descripcion: String = "";
    precio: Number = 0;

    toObject() {
        return {
            titulo: this.titulo,
            descripcion: this.descripcion,
            precio: this.precio,
        };
    }
}
