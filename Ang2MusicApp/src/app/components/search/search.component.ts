import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Artist } from '../../../Artist';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchRes: Artist[];


  constructor(private _musicService:MusicService ) { }


  searchMusic(){

    this._musicService.searchMusic(this.searchStr)
    .subscribe(res=> {
      this.searchRes = res.artists.item;
    })
  }

  ngOnInit() {
  }

}
