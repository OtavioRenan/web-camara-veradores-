import { BaseModel } from './../core/base.model';

export interface ParliamentaryModel extends BaseModel {
    politicalParyId: Number;
    legislatureId: Number;
    name: String;
    SocialName: String;
    email: String;
    numberPhone: String;
    birth: Date;
    createdAt: Date;
    updatedAt: Date;
    birthBr: String;
    createdAtBr: String;
    updatedAtBr: String;
}