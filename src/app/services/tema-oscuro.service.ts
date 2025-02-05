import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaOscuroService {
    public modoOscuroSignal = signal<string>(window.localStorage.getItem("modoOscuroSignal") ?? "light");

    public ActualizarModoOscuro() {
        this.modoOscuroSignal.update((value) => (value === "dark" ? "light" : "dark"));
    }

    constructor() {
        effect(() => {
            window.localStorage.setItem("modoOscuroSignal", this.modoOscuroSignal());
        });
    }
}
