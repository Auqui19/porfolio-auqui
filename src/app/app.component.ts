import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanerComponent } from './baner/baner.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BanerComponent, HabilidadesComponent,
    ProyectosComponent, ContactoComponent, ResponsiveDirective, 
    HeaderComponent, ExperienciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio-auqui';
}
