import { HttpClient } from '@angular/common/http';
import { AdjutancyModel } from './../../models/adjutancy.model';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';

@Injectable({
  providedIn: 'root'
})

export class AdjutancyService extends BaseService<AdjutancyModel>{
  constructor(httpclient: HttpClient) {
    super(httpclient ,'adjutancy');
  }
}