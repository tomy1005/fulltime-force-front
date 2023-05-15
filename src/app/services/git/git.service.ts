import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }
  getCommitsFront() {
    return this.http.get<any>(BACK_END_URL+'git/commits-front');
  }
  getCommitsBack() {
    return this.http.get<any>(BACK_END_URL+'git/commits-back');
  }
}
