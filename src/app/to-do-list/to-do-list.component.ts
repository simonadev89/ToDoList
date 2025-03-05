import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms'

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit{

public tasks: { task: string, checked: boolean }[] = [];

  constructor() { }
  
  ngOnInit(): void {}

  onSubmit(Form: NgForm) {
  if (Form.valid){
    this.tasks.push( {task: Form.value.inputText, checked: false}),
    Form.reset()
    console.log(this.tasks)
  }
}

  onDelete(taskToRemove: {task: string; checked:boolean}) {
    this.tasks = this.tasks.filter(task => task !== taskToRemove);
  }

  onReset(Form: NgForm){
  // // console.log(tasks)
  this.tasks= []
  // this.tasks.splice(0,this.tasks.length)
  }
}