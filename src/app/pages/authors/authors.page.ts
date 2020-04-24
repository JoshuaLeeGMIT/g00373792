import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { GitService } from '../../services/git.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {
  authors: any = [];

  constructor(private gs: GitService, private store: Storage) { }

  ngOnInit() {
    this.store.get("repo").then((repo) => {
      this.authors = this.gs.getCommits(repo).subscribe((data) => {
        this.authors = data;
      });
    });
  }
}
