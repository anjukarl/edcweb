import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qandata',
  templateUrl: './qandata.component.html',
  styleUrls: ['./qandata.component.scss'],
})
export class QandataComponent implements OnInit {
  heading = 'Questions & Answers - Audio / Text';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
