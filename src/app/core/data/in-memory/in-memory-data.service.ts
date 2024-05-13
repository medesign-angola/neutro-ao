import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { HEADER_LINKS_ITEMS } from "../mock/header-links.const";

@Injectable({
    providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const categories = HEADER_LINKS_ITEMS
        return [categories];
    }
}