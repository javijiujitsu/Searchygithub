import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-the-profile',
  templateUrl: './the-profile.component.html',
  styleUrls: ['./the-profile.component.css']
})
export class TheProfileComponent implements OnInit {
    user:any[];
    repos:any[];

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      this.user =user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

  }

  ngOnInit() {
  }

}
