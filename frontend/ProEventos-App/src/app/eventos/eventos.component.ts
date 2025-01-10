import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  standalone: true,
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent {
  eventos: any;

  ngOnInit(): void {
    this.getEventos();
  }

  constructor(private http: HttpClient) {}

  public getEventos(): void {
    this.http.get('https://localhost:7189/api/eventos').subscribe({
      next: (response) => (this.eventos = response),
      error: (error) => console.log(error),
    });
  }
}
