import { BaseModel } from './../core/base.model';

export class PoliticalParyModel implements BaseModel {
    id!: number;
    name!: string;
    initials!: string;
    createdAt!: Date;
    updatedAt!: Date;
    createdAtBr!: string;
    updatedAtBr!: string;
}