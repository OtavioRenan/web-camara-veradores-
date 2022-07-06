import { BaseModel } from './../core/base.model';

export interface AdjutancyModel extends BaseModel
{
    name: String;
    description: String;
    createdAt: Date;
    updatedAt: Date;
}