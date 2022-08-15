import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gentorev',
  templateUrl: './gentorev.component.html',
  styleUrls: ['./gentorev.component.scss'],
})
export class GentorevComponent implements OnInit {
  heading = 'With the Bible - Videos';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
