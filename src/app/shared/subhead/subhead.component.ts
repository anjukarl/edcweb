import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subhead',
  templateUrl: './subhead.component.html',
  styleUrls: ['./subhead.component.scss'],
})
export class SubheadComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
