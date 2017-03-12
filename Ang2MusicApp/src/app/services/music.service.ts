import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpModule, RequestOptions,Http } from '@angular/http';

@Injectable()
export class MusicService {

  private searchUrl: string;
  private artistUrl: string;

  constructor(private _http:Http) { }

searchMusic(str:string, type='artist'){
this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
return this._http.get(this.searchUrl)
.map(res => res.json());
}

getArtist(id:string){
this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
return this._http.get(this.artistUrl)
.map(res => res.json());
}

}
