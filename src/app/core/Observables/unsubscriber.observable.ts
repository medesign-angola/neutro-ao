import { Directive, Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export abstract class Unsubcriber implements OnDestroy{

    protected unsubcribe$ = new Subject<void>();

    ngOnDestroy(): void {
        this.unsubcribe$.next();
        this.unsubcribe$.complete();
    }

}