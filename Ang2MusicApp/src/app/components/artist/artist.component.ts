import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

id:string;
artist:Artist[];
albums: Album[];
  constructor(private _musicService: MusicService) { }

  ngOnInit() {
  }

}
