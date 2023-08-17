import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent  implements OnInit {
  

  tasks: Task[] = [
    {
      title: 'Leetcode',
      description: 'Grind LEETCODE AHHH',
      date: '2023-08-16',
      time: '10:00 AM',
      priority_level: 'low',
      category: 'work',
      progress_level: 'Not started',
    },
    {
      title: 'Go to work',
      description: 'wake up to go to work and make that $',
      date: '2023-08-17',
      time: '730 AM',
      priority_level: 'HIGH',
      category: 'WORK',
      progress_level: 'Not Started',
    }
  ];


  constructor() { }

  ngOnInit() {}

}
