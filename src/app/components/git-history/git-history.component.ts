import { Component } from '@angular/core';
import { GitService } from 'src/app/services/git/git.service';

@Component({
  selector: 'git-history',
  templateUrl: './git-history.component.html',
  styleUrls: ['./git-history.component.scss']
})
export class GitHistoryComponent {

  constructor(private _gitService: GitService) { }
  public commitsFront: any = [];
  public commitsBack: any = [];

  ngOnInit() {
    this.getAllCommitsFront();
    this.getAllCommitsBack();
  }

  getAllCommitsFront() {
    this._gitService.getCommitsFront().subscribe(data => {
      this.commitsFront = data;
    })
  }

  getAllCommitsBack() {
    this._gitService.getCommitsBack().subscribe(data => {
      this.commitsBack = data;
    })
  }
}
