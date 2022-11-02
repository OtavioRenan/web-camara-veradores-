import { SpringPagination } from '../../models/spring-pagination.model';
import { HttpParams } from '@angular/common/http';
import { AdjutancyService } from './../../services/adjutancy/adjutancy.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adjutancy',
  templateUrl: './adjutancy.component.html',
  styleUrls: ['./adjutancy.component.css']
})

export class AdjutancyComponent implements OnInit {
  
  protected tableDisplayedColumns: Array<string> = ['id', 'name', 'description', 'createdAt', 'updatedAt', 'actions'];
  
  protected pagination: SpringPagination = new SpringPagination();
  
  protected offSet: number = 0;
  
  protected pageSize: number = 5;
 
  protected params: Object = { name: '', description: '', createdAt: '', updatedAt: '' };

  constructor(private service: AdjutancyService) {}

  ngOnInit() : void {
    this.getPagination(this.offSet, this.pageSize, this.getParamsUrl());
  }

  async getPagination(offSet: number, pageSize: number, params: HttpParams) : Promise<void> {

    this.service.pagination(offSet, pageSize, params).subscribe(
      { 
        next: res => { this.pagination = res; console.log(res) },
        error: err => console.log(err),
        complete: () => console.info('Complete ===> Get Pagination')
      }
    );
  }

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
