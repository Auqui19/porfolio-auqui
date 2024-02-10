import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent implements OnInit{
  
  private intervalo: any;
  private direccion: number = 1;

  ngOnInit(): void {
    this.start();
  }

  start() {
    const carrusel: any = document.querySelector(".carrusel-items");
    let step = 1;
    this.intervalo = setInterval(() => {
      carrusel.scrollLeft += step * this.direccion;
      if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.clientWidth) {
        this.direccion = -1; 
      } else if (carrusel.scrollLeft <= 0) {
        this.direccion = 1; 
      }
    }, 30);
  }

  stop() {
    clearInterval(this.intervalo);
  }
}
