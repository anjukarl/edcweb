import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordftd',
  templateUrl: './wordftd.component.html',
  styleUrls: ['./wordftd.component.scss'],
})
export class WordftdComponent implements OnInit {
  heading = 'Daily Word - Audio & Text';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
