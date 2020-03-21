export class Productos {
    constructor(_id = '', titulo = '', descripcion = '', presentacion = '', precio = '', imageURL='', public_id='') {
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.presentacion = presentacion;
        this.precio = precio;
        this.imageURL = imageURL;
        this.public_id= public_id;
    }

    _id: string;
    titulo: string;
    descripcion: string;
    presentacion: string;
    precio: string;
    imageURL: string;
    public_id: string;
}
