import { Component, inject } from '@angular/core';
import { PeticionesApiService } from '../../../services/peticiones-api.service';
import { Experiencia } from '../../../models/experiencia';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
    public ServicioApi: PeticionesApiService = inject(PeticionesApiService);

    public ListaTrabajos: Experiencia[] = [];

    constructor() {
        this.ServicioApi.obtenerInformacionExperiencia().then((datos: Experiencia[]) => {
            this.ListaTrabajos = datos;
        });
    }
}
