import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Backlog } from 'src/app/domene/backlog';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  @Input() backlog: Backlog;
  
  constructor() { }

  ngOnInit(): void {
  }

}
