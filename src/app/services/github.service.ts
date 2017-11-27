import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'Iv1.22c0350e5196dd19';
  private client_secret = '049abc137d217269208b0addc04d0e0ecac9c374';

  constructor(private _http: Http) {
     console.log('Github Service Ready');
     this.username = 'javijiujitsu';
  }
  getUser(){
      return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

}
