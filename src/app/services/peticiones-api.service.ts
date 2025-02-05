import { Injectable } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class PeticionesApiService {
    private baseUri = "https://raw.githubusercontent.com/felix-am-rodriguez/api-simulada-json/refs/heads/master";

    constructor() { }

    public async obtenerInformacionEducacion(): Promise<any> {
        const datos = await fetch(this.baseUri + "/educacion.json");
        return await datos.json() ?? [];
    }

    public async obtenerInformacionExperiencia(): Promise<Experiencia[]> {
        const datos = await fetch(this.baseUri + "/experiencia.json");
        return await datos.json() ?? [];
    }

    public async obtenerInformacionProyectos(): Promise<Proyectos[]> {
        const datos = await fetch(this.baseUri + "/proyectos.json");
        return await datos.json() ?? [];
    }
}
