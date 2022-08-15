import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.scss'],
})
export class AudiosComponent implements OnInit {
  heading = 'Audio Resources';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
