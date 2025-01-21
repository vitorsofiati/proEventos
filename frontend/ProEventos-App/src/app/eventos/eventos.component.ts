import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { response } from 'express';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  standalone: true,
  selector: 'app-eventos',
  imports: [CommonModule, CollapseModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent {
  public eventos: any = [];
  public imagemVisivel: boolean = true;

  ngOnInit(): void {
    this.getEventos();
  }

  constructor(private http: HttpClient) {}

  alterarImagem() {
    this.imagemVisivel = !this.imagemVisivel;
  }

  public getEventos(): void {
    this.http.get('https://localhost:7189/api/eventos').subscribe({
      next: (response) => (this.eventos = response),
      error: (error) => console.log(error),
    });
  }
}
