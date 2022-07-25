import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qanda',
  templateUrl: './qanda.component.html',
  styleUrls: ['./qanda.component.scss'],
})
export class QandaComponent implements OnInit {
  heading = 'Questions and Answers';

  constructor() {}

  ngOnInit(): void {}
}
