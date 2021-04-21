import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Backlog } from 'src/app/domene/backlog';
import { BacklogsService } from 'src/app/services/backlogs.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  backlog: Backlog;

  constructor(private backlogsService: BacklogsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.backlogsService.getBacklog(id).subscribe(backlog => {
      this.backlog = backlog;
    })
  }
}
