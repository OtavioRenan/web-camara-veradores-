import { BaseModel } from './../core/base.model';

export interface PoliticalParyModel extends BaseModel {
    name: String;
    initials: String;
    createdAt: Date;
    updatedAt: Date;
    createdAtBr: String;
    updatedAtBr: String;
}