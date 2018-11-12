import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Noticias } from "../model/noticias";

@Injectable()
export class NoticiasService {
        constructor(private http : HttpClient) { }

        getNoticias() : Observable<Noticias[]>{
            return this.http.get<Noticias[]>(
                'http://www.mocky.io/v2/5be58e512f000091000fc2e8'
            );
            
    }
}