import { AdjutancyModel } from './../../models/adjutancy.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjutancy',
  templateUrl: './adjutancy.component.html',
  styleUrls: ['./adjutancy.component.css']
})

export class AdjutancyComponent implements OnInit {

  tableDisplayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'updatedAt'];

  listAdjutancy: AdjutancyModel[] = [
    { id: 1, name: 'Presidente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate() },
    { id: 2, name: 'Membro', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate() },
    { id: 3, name: 'Relator', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate() },
    { id: 4, name: '1º Suplente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate() },
    { id: 5, name: '2º Suplente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate() },
    { id: 6, name: '3º Suplente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate() }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private newDate() : Date {
    return new Date('2022-07-6');
  }

}
