import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Album } from '../../../Album';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


id:string;
album:Album[];
  constructor(private _musicService: MusicService,
              private _route:ActivatedRoute ) { }

  ngOnInit() {


    this._route.params
.map(params => params['id'])
.subscribe((id) => {
  this._musicService.getAlbum(id)
  .subscribe(album => {
    this.album = album;
  })


})


  }
  }


