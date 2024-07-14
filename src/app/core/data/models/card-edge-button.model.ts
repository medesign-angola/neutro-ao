import { Params, QueryParamsHandling } from "@angular/router";

export interface CardEdgeButton{
    visible: boolean,
    routeTo: string | any[],
    queryParams?: Params,
    queryParamsHandling?: QueryParamsHandling
}