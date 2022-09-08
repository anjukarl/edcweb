import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordftdta',
  templateUrl: './wordftdta.component.html',
  styleUrls: ['./wordftdta.component.scss'],
})
export class WordftdtaComponent implements OnInit {
  heading = 'Word for the Day - Audio / Text';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
