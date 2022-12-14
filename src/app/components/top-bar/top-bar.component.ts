import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Output() homeEvent = new EventEmitter();
  @Output() profileEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  home(): void {
    this.homeEvent.emit();
  }
  profile(): void {
    this.profileEvent.emit();
  }
}
