import { BaseModel } from '../core/base.model';

export class SpringPagination {
    content!: Array<BaseModel>;
    pageable!: Object;
    last!: boolean
    totalElements!: number;
    totalPages!: number;
    first!: boolean;
    numberOfElements!: number;
    size!: number;
    number!: number;
    sort!: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    };
    empty!: boolean;
}