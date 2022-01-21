import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http : HttpClient) { }

  display():Observable<any>{
    return this.http.get<any>('http://localhost/backend/displayTags.php' );
    }

    delete(value: any):Observable<any>{
      return this.http.post<any>('http://localhost/backend/deleteTags.php',value);
    }

}
