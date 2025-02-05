import { Component, inject } from '@angular/core';
import { PeticionesApiService } from '../../../services/peticiones-api.service';
import { Proyectos } from '../../../models/proyectos';

@Component({
  selector: 'app-portafolio',
  imports: [],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
    public ServicioApi: PeticionesApiService = inject(PeticionesApiService);
    
    public ListaProyectos: Proyectos[] = [];

    constructor() {
        this.ServicioApi.obtenerInformacionProyectos().then((datos: Proyectos[]) => {
            this.ListaProyectos = datos;
        });
    }
}
