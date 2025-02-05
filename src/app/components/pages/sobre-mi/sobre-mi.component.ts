import { Component, inject } from '@angular/core';
import { TemaOscuroService } from '../../../services/tema-oscuro.service';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {
    public TemaModoOscuroService: TemaOscuroService = inject(TemaOscuroService);
}
