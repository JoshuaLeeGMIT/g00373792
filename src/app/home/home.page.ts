import { Component } from '@angular/core';
import { GitService } from '../services/git.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hideCards: boolean = true;
  hideErr: boolean = true;
  repo: string;

  constructor(private gs: GitService, private store: Storage) {}
  
  ngOnInit() {
    /* Ensure the cards are visible if there's a repo in storage. */
    this.store.get("repo").then((repo) => {
      this.hideCards = false;
      this.hideErr = true;
    });
  }

  isValid(): void {
    this.gs.checkRepo(this.repo).subscribe((data) => {
      this.hideCards = false;
      this.hideErr = true;
      this.store.set("repo", this.repo);

      return;
    })

    /* If we reach these statements, the URL was invalid. */
    this.hideCards = true;
    this.hideErr = false;
  }
}
