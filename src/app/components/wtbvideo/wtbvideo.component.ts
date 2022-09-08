import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wtbvideo',
  templateUrl: './wtbvideo.component.html',
  styleUrls: ['./wtbvideo.component.scss'],
})
export class WtbvideoComponent implements OnInit {
  heading = 'With the Bible - Videos';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
