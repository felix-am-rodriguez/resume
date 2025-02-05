import { Component, inject } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { TemaOscuroService } from '../../services/tema-oscuro.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    public rutas = routes;

    public TemaOscuroService: TemaOscuroService = inject(TemaOscuroService);

    public cambiarModoOscuro() {
        this.TemaOscuroService.ActualizarModoOscuro();
    }
}
