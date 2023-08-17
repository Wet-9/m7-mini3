import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Input() task: any;
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    priority_level: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    progress_level: new FormControl('', [Validators.required]),
  });
  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private router: Router) { }

  ngOnInit() {}

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get date() {
    return this.form.get('date');
  }

  get time() {
    return this.form.get('time');
  }

  get priority_level() { 
    return this.form.get('priority_level'); 
  }

  get category() {
    return this.form.get('category');
  }

  get progress_level() {
    return this.form.get('progress_level');
  }

  add_task() {
    if (this.form.valid) {
      let x = <Task>this.form.value;
      x.date = x.date.slice(0, 10);
      x.time = x.date + ' ' + this.time?.value;
      this.taskService.addTask(x).subscribe(
        (result: { task: { title: string } }) => {
          console.log(result.task.title + ' has been added successfully');
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
      this.form.reset();
      this.router.navigate(['tabs/tab1']);
    } else {
      console.log('Invalid form submission');
    }
  }
}


