import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
    public contacto = {
        email: "felix_rodriguez.developer@outlook.com",
        ubicacion: "Colima, Mexico",
        telefono: "+52 312-382-3687",
        github: "https://github.com/felix-am-rodriguez/"
    };
}
