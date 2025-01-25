import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { error } from 'console';
import { response } from 'express';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  standalone: true,
  selector: 'app-eventos',
  imports: [CommonModule, CollapseModule, FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent {
  public eventos: any = [];
  public eventosFiltrados: any = [];
  public imagemVisivel: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista
      ? this.filtrarEventos(this.filtroLista)
      : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string }) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  ngOnInit(): void {
    this.getEventos();
  }

  constructor(private http: HttpClient) {}

  alterarImagem() {
    this.imagemVisivel = !this.imagemVisivel;
  }

  public getEventos(): void {
    this.http.get('https://localhost:7189/api/eventos').subscribe({
      next: (response) => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error: (error) => console.log(error),
    });
  }
}
