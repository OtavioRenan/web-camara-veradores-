import { BaseModel } from './../core/base.model';

export class DirectorTableModel implements BaseModel {
    id!: number;
    legislatureId!: number;
    adjutancyId!: number;
    parliamentaryId!: number;
    createdAt!: Date;
    updatedAt!: Date;
    createdAtBr!: string;
    updatedAtBr!: string;
}