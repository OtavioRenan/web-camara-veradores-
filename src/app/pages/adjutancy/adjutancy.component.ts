import { SpringPagination } from './../../models/spring-pagination.model';
import { HttpParams } from '@angular/common/http';
import { AdjutancyService } from './../../services/adjutancy/adjutancy.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-adjutancy',
  templateUrl: './adjutancy.component.html',
  styleUrls: ['./adjutancy.component.css']
})

export class AdjutancyComponent implements OnInit {

  protected pageSizeOptions: Array<number> = [5, 10, 20, 50];
  
  protected tableDisplayedColumns: Array<string> = ['id', 'name', 'description', 'actions'];
  
  protected pagination: SpringPagination = new SpringPagination();

  protected pageEvent: PageEvent = {
    pageIndex: 0,
    previousPageIndex: 0,
    pageSize: 5,
    length: 0
  }
 
  protected params: Object = { name: '', description: '', createdAt: '', updatedAt: '' };

  constructor(private service: AdjutancyService) {}

  ngOnInit() : void {
    this.getPagination(this.pageEvent);
  }

  async getPagination(event: PageEvent) : Promise<void> {
    this.service.paginationWithParams(event.pageIndex, event.pageSize, this.getParamsUrl()).subscribe(
      { 
        next: res => {
          this.pagination = res
          this.setPageEvent(res);
        },
        error: err => console.log(err)
      }
    );
  }

  private setPageEvent(pagination: SpringPagination) : void {
    this.pageEvent.length = pagination.totalElements;
    this.pageEvent.pageSize = pagination.size;
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
