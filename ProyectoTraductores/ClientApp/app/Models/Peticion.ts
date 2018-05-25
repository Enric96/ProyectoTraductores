export class Peticion {
    constructor(
        public idIdioma: number,
        public idServicios: number,
        public idTraductor: number,
        public nombreSolicitante: string,
        public descripcion: string,
        public email: string,
        public telefono: string
    ) { }
}