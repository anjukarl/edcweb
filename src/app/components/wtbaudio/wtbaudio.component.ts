import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wtbaudio',
  templateUrl: './wtbaudio.component.html',
  styleUrls: ['./wtbaudio.component.scss'],
})
export class WtbaudioComponent implements OnInit {
  heading = 'With the Bible - Audio (Kannada)';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';

  constructor() {}

  ngOnInit(): void {}
}
