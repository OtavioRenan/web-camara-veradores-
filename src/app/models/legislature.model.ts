import { BaseModel } from './../core/base.model';

export class LegislatureModel implements BaseModel {
    id!: number;
    description!: string;
    dateStart!: Date;
    dateEnd!: Date;
    createdAt!: Date;
    updatedAt!: Date;
    dateStartBr!: string;
    dateEndBr!: string;
    createdAtBr!: string;
    updatedAtBr!: string;
}