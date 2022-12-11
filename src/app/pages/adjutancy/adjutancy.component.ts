import { SpringPagination } from './../../models/spring-pagination.model';
import { HttpParams } from '@angular/common/http';
import { AdjutancyService } from './../../services/adjutancy/adjutancy.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AdjutancyParams } from './adjuntacy.params';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adjutancy',
  templateUrl: './adjutancy.component.html',
  styleUrls: ['./adjutancy.component.css']
})

export class AdjutancyComponent implements OnInit {

  protected formGroupSearch: FormGroup = this.factoryFormGroupSearch(); 

  protected pageSizeOptions: Array<number> = [5, 10, 20, 50];
  
  protected tableDisplayedColumns: Array<string> = ['id', 'name', 'description', 'actions'];
  
  protected pagination: SpringPagination = new SpringPagination();

  protected pageEvent: PageEvent = {
    pageIndex: 0,
    previousPageIndex: 0,
    pageSize: 5,
    length: 0
  }
 
  protected params: AdjutancyParams = { fields: '', createdAt: '', updatedAt: '' };

  constructor(private service: AdjutancyService, private formBuilder: FormBuilder) {}

  ngOnInit() : void {
    this.getPagination(this.pageEvent);
  }

  factoryFormGroupSearch() : FormGroup {
    return this.formBuilder.group({
      fields: ['']
    });
  }

  async getAdjutancy(event: PageEvent, params: HttpParams) : Promise<void> {
    this.service.paginationWithParams(event.pageIndex, event.pageSize, params).subscribe(
      { 
        next: res => {
          this.pagination = res
          this.setPageEvent(res);
        },
        error: err => console.log(err)
      }
    );
  }

  async onCLickSearch() : Promise<void> {
    let params: string = this.formGroupSearch.controls['fields'].value;
    
    if(this.isEmptry(params)) {
      alert("Barra de pesquisa vazia.")
    } else {
      this.getAdjutancy(this.pageEvent, this.getParamsUrl(params));
    }
  }
  
  async getPagination(event: PageEvent) : Promise<void> {
    this.getAdjutancy(event, this.getParamsUrl());
  }
  
  protected onCLickClearSearch() : void {
    this.formGroupSearch.controls['fields'].setValue('');
    this.getPagination(this.pageEvent);
  }

  private setPageEvent(pagination: SpringPagination) : void {
    this.pageEvent.length = pagination.totalElements;
    this.pageEvent.pageSize = pagination.size;
  }

  private getParamsUrl(fields?: string) : HttpParams {
    let params = new HttpParams();

    if(fields == null || fields == undefined) {
      for (let [key, value] of Object.entries(this.params)) {
        params = params.append(key, this.ifUndefinedReturnEmptry(value));
      }     
    } else {
      params = params.append("fields", fields);
    }

    return params;
  }

  private ifUndefinedReturnEmptry(str: any) : string {
    return str == undefined ? '' : str;
  }

  private isEmptry(fields: string) : boolean {
    return fields == null || fields == undefined || fields == '';
  }

  
}
