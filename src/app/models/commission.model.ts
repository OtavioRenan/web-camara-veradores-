import { BaseModel } from './../core/base.model';

export interface CommissionModel extends BaseModel {
    name: String;
    description: String;
    createdAt: Date;
    updatedAt: Date;
    createdAtBr: String;
    updatedAtBr: String;
}