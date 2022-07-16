import { BaseModel } from './../core/base.model';

export class ParliamentaryModel implements BaseModel {
    id!: number;
    politicalParyId!: number;
    legislatureId!: number;
    name!: string;
    SocialName!: string;
    email!: string;
    numberPhone!: string;
    birth!: Date;
    createdAt!: Date;
    updatedAt!: Date;
    birthBr!: string;
    createdAtBr!: string;
    updatedAtBr!: string;
}