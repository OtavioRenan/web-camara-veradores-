import { Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { AdjutancyService } from './../../services/adjutancy/adjutancy.service';
import { AdjutancyModel } from './../../models/adjutancy.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjutancy',
  templateUrl: './adjutancy.component.html',
  styleUrls: ['./adjutancy.component.css']
})

export class AdjutancyComponent implements OnInit {

  protected params: Object = { name: '', description: '', createdAt: '', updatedAt: '' };
 
  protected tableDisplayedColumns: Array<string> = ['id', 'name', 'description', 'createdAt', 'updatedAt'];

  protected listAdjutancy: Array<AdjutancyModel> = [
    { id: 1, name: 'Presidente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate(), createdAtBr: '', updatedAtBr: '' },
    { id: 2, name: 'Membro', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate(), createdAtBr: '', updatedAtBr: '' },
    { id: 3, name: 'Relator', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate(), createdAtBr: '', updatedAtBr: '' },
    { id: 4, name: '1º Suplente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate(), createdAtBr: '', updatedAtBr: '' },
    { id: 5, name: '2º Suplente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate(), createdAtBr: '', updatedAtBr: '' },
    { id: 6, name: '3º Suplente', description: '1.0079', createdAt: this.newDate(), updatedAt: this.newDate(), createdAtBr: '', updatedAtBr: '' }
  ];

  constructor(private service: AdjutancyService) {}

  ngOnInit(): void {
    this.findAll()
  }

  async findAll() : Promise<void> {
    let params = this.getParamsUrl();

    this.service.findAll(params).subscribe(
      { 
        next: res => this.listAdjutancy = res,
        error: err => console.log(err),
        complete: () => console.info('Complete.')
      }
    );
  }

  private newDate() : Date { return new Date('2022-07-6'); }

  private getParamsUrl() : HttpParams {
    let params = new HttpParams();

    for (let [key, value] of Object.entries(this.params)) {
      params = params.append(key, this.ifUndefinedReturnEmptry(value));
    }

    return params;
  }

  private ifUndefinedReturnEmptry(str: any) : string {
    return str == undefined ? '' : str;
  }
}
