import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any[] = []; // Assuming tasks is an array of objects

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.service.getTasks().subscribe(
      (result: any[]) => {
        console.log('Received tasks:', result);
        this.tasks = result;
      },
      (err: HttpErrorResponse) => {
        console.log('Error:', err);
      }
    );
  }
}
