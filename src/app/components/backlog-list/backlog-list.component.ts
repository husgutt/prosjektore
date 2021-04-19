import { Component, OnInit } from '@angular/core';
import { Backlog } from 'src/app/domene/backlog';
import { BacklogsService } from 'src/app/services/backlogs.service';

@Component({
  selector: 'app-backlog-list',
  templateUrl: './backlog-list.component.html',
  styleUrls: ['./backlog-list.component.scss']
})
export class BacklogListComponent implements OnInit {

  backlogs: Backlog[];

  constructor(private backlogsService: BacklogsService) {
   }

  ngOnInit(): void {
    this.backlogsService.getBacklogs().subscribe(backlogs => this.backlogs = backlogs);
  }

}
