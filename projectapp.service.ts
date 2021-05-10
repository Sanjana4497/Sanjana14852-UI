import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
// import { format } from 'node:path';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectappService {

  serverURL:string
  constructor(private httpsvc:HttpClient) {
    this.serverURL="http://localhost:7077/"
   }

     getProjectsByEmpno(empno:number):Observable<Project[]>{
      return this.httpsvc.get<Project[]>(this.serverURL+"emp/list/"+empno)

     }

     registerEmployeeProject(empno:number,newProject:Project):Observable<Project>{
  // format=key=value&key=value
  var empdata = "empno="+empno+"&projectid="+newProject.projectid+
  "&name="+newProject.name+"&location="+newProject.location

  console.log(empdata)
// add the header for request bodyformat type
var httpOptions = {
headers: new HttpHeaders(
  {"Content-Type":"application/x-www-form-urlencoded"})
}
 return this.httpsvc.post<Project>(
   this.serverURL+"emp/register",empdata,httpOptions)
}

 deleteProjectByProjectId(empno:number,projectid:number):Observable<String>{
  return this.httpsvc.get<String>(this.serverURL+"emp/"+empno+"/project/delete/"+projectid)
 }

}
