import { Component } from '@angular/core';
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ToDoListComponent, CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
