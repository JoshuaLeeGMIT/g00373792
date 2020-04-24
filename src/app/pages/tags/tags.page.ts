import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { GitService } from '../../services/git.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {
  tags: any = [];

  constructor(private gs: GitService, private store: Storage) { }

  ngOnInit() {
    this.store.get("repo").then((repo) => {
      this.tags = this.gs.getTags(repo).subscribe((data) => {
        this.tags = data;
      });
    });
  }
}
