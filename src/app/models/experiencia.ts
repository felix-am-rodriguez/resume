export interface Experiencia {
    posicion: string;
    compania: string;
    descripcion: string;
    actividades: [
        {
            nombre: string;
        }
    ];
    fecha_ingreso: number;
    fecha_egreso: number;
    imagen: string;
}
