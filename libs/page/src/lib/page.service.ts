import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PageService {
  
    constructor() { }

    public onClick() {
        console.log('work')
    }
}
  