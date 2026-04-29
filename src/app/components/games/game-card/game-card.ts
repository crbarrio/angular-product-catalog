import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Game } from '../../../interfaces/game.interfacxe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-card',
  imports: [RouterLink],
  templateUrl: './game-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCard { 

  game = input.required<Game>();

  selectedGame = output<number>();

}
