import { environment } from './../../environments/environment';
import { BaseModel } from "./base.model";
import { HttpOptionsJsonUtil } from './../utils/httpOptionsJsonUtil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

export abstract class BaseService<Model extends BaseModel>
{
    protected urlService: String;
    protected readonly httpOpstions = HttpOptionsJsonUtil;
    protected readonly urlBaseApi: String = environment.urlBaseApi;

    constructor(
        private httpClient: HttpClient,
        private service: String
    ) {
        this.urlService = service;
    }

    public findAll(params: Params) : Observable<Array<Model>>
    {
        return this.httpClient.get<Array<Model>>(`${this.makeUrl()}?${params}`);
    }

    public findById(id: number) : Observable<Model>
    {
      return this.httpClient.get<Model>(`${this.makeUrl()}${id}`);
    }

    public save(model: Model) : Observable<Model>
    {
        return this.httpClient.post<Model>(`${this.makeUrl()}`, `${this.makeJson(model)}`, this.httpOpstions);
    }
  
    public update(id: number, model: Model) : Observable<Model>
    {
        return this.httpClient.post<Model>(`${this.makeUrl()}${id}`, `${this.makeJson(model)}`, this.httpOpstions);
    }

    private makeUrl() : String
    {
        return `${this.urlBaseApi}${this.urlService}/`;
    }

    private makeJson(model: Model) : String
    {
        return JSON.stringify(model);
    }
}