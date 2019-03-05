import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CallApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CallApiProvider Provider');
  }
  public GetAllstudent(){
    return this.http.get('https://localhost:5001/api/Classroom/GetallStudents');
  }
  public GetStudent(id:string){
    return this.http.get('https://localhost:5001/api/Classroom/GetStudent/'+ id);
  }

  public CreateStudent(newStudent:any){
    return this.http.post('https://localhost:5001/api/Classroom/CreateStudent', newStudent);
  }

  public UpdateStudent(newStudent:any){
    return this.http.put('https://localhost:5001/api/Classroom/UpdateStudent', newStudent);
  }
  public DeleteStudent(id:string ){
    return this.http.delete('https://localhost:5001/api/Classroom/DeleteStudent/'+id);
  }
}
