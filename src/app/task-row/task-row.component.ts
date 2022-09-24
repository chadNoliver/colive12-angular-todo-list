import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-task-row]',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})

export class TaskRowComponent implements OnInit {
@Input() task: any;
  constructor() { }
  ngOnInit(): void {
  }

}
