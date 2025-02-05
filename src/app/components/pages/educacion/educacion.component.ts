import { Component, inject } from '@angular/core';
import { PeticionesApiService } from '../../../services/peticiones-api.service';
import { Educacion, Cursos } from '../../../models/educacion';

declare var bootstrap: any;

@Component({
  selector: 'app-educacion',
  imports: [],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {
    public ServicioApi: PeticionesApiService = inject(PeticionesApiService);
        
    public ListaNivelesEducacion: Educacion[] = [];
    public ListaCursos: Cursos[] = [];

    constructor() {
        this.ServicioApi.obtenerInformacionEducacion().then((datos) => {
            this.ListaNivelesEducacion = datos["educacion"];
            this.ListaCursos = datos["cursos"];
        });
    }


    openModal(imageUrl: string) {
        const modalElement = document.getElementById('imageModal');
        const modal = new bootstrap.Modal(modalElement!);
        modal.show();

        const expandedImage = document.getElementById('expandedImg') as HTMLImageElement;
        expandedImage.src = imageUrl;
    }
}
