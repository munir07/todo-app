import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})

export class TaskEntryComponent implements OnInit {

  @Input()
  taskList: any[];

  @ViewChild('MyToDoForm')
  theForm: NgForm;
  minDate = new Date(2018, 6, 1);
  maxDate = new Date(2020, 0, 1);

  constructor() { }

  ngOnInit() {
  }

  processForm(){
    this.taskList.push(this.theForm.value);
    this.theForm.resetForm();
  }
}
