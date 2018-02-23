import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // Output. We are passing data from the child to the parent component
  @Output () interValFired = new EventEmitter<number>();

  gameInterVal;
  lastNumber =0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.gameInterVal = setInterval(() => {
      this.interValFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }


  // When the game is paused clear the interval

  onPauseGame() {
    clearInterval(this.gameInterVal);
  }


}
