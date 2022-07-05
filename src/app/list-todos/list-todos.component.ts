import { Component, OnInit } from '@angular/core';
import { todo } from '../model/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: todo[] = [
    new todo(1, 'Learn to Dance', false, new Date('12/10/2022')),
    new todo(2, 'Learn to Code', false, new Date('1/1/2023')),
  ];
  constructor() {}

  ngOnInit(): void {}
}
