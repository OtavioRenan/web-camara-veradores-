import { BaseModel } from './../core/base.model';

export interface DirectorTableModel extends BaseModel {
    legislatureId: Number;
    adjutancyId: Number;
    parliamentaryId: Number;
    createdAt: Date;
    updatedAt: Date;
    createdAtBr: String;
    updatedAtBr: String;
}