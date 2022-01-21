import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http : HttpClient) { }

  displayTags():Observable<any>{
    return this.http.get<any>('http://localhost/backend/displayTags.php');
    }

displayTask():Observable<any>{
return this.http.get<any>('http://localhost/backend/displayTask.php');
}

changeStatus(value : any):Observable<any>{
  return this.http.post<any>('http://localhost/backend/updateStatus.php',value);
}

changeTags(value : any):Observable<any>{
  return this.http.post<any>('http://localhost/backend/updateTags.php',value);
}

deleteTask(value: any):Observable<any>{
  return this.http.post<any>('http://localhost/backend/deleteTask.php',value);
}

addTask(value: any):Observable<any>{
  return this.http.post<any>('http://localhost/backend/addTask.php',value);
}

}
