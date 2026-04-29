import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Game } from '../../../interfaces/game.interfacxe';

@Component({
  selector: 'app-game-card',
  imports: [],
  templateUrl: './game-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCard { 

  game = input.required<Game>();

}
