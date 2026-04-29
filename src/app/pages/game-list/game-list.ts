import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  imports: [],
  templateUrl: './game-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GameList { }
