import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:8101'; //url used "Changeable"

  constructor(private http: HttpClient) {}

  // Method to retrieve tasks from the server
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tasks`);
  }

  // Method to add a new task
  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/tasks`, task);
  }
}
