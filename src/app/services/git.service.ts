import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  checkRepo(repo: string): Observable<any> {
    return this.http.get(repo);
  }

  getAuthors(repo: string): Observable<any> {
    let authors: string = repo + "/stats/contributors";

    return this.http.get(authors);
  }

  getCommits(repo: string): Observable<any> {
    let commits: string = repo + "/commits";

    return this.http.get(commits);
  }

  getTags(repo: string): Observable<any> {
    let tags: string = repo + "/releases";

    return this.http.get(tags);
  }
}
