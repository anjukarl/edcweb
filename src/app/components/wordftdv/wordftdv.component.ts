import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordftdv',
  templateUrl: './wordftdv.component.html',
  styleUrls: ['./wordftdv.component.scss'],
})
export class WordftdvComponent implements OnInit {
  heading = 'Daily Word - Video';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
