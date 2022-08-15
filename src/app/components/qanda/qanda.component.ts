import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qanda',
  templateUrl: './qanda.component.html',
  styleUrls: ['./qanda.component.scss'],
})
export class QandaComponent implements OnInit {
  heading = 'Questions and Answers';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
