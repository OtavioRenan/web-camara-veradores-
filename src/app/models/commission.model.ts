import { BaseModel } from './../core/base.model';

export class CommissionModel implements BaseModel {
    id!: number;
    name!: string;
    description!: string;
    createdAt!: Date;
    updatedAt!: Date;
    createdAtBr!: string;
    updatedAtBr!: string;
}