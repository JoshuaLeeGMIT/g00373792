import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { GitService } from '../../services/git.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.page.html',
  styleUrls: ['./commits.page.scss'],
})
export class CommitsPage implements OnInit {
  commits: any = [];

  constructor(private gs: GitService, private store: Storage) { }

  ngOnInit() {
    this.store.get("repo").then((repo) => {
      this.commits = this.gs.getCommits(repo).subscribe((data) => {
        this.commits = data;
      });
    });
  }
}
