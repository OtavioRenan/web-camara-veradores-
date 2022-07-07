import { BaseModel } from './../core/base.model';

export interface LegislatureModel extends BaseModel {
    description: String;
    dateStart: Date;
    dateEnd: Date;
    createdAt: Date;
    updatedAt: Date;
    dateStartBr: String;
    dateEndBr: String;
    createdAtBr: String;
    updatedAtBr: String;
}