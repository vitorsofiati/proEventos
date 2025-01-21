import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavComponent } from './nav/nav.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, EventosComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ProEventos-App';
}
