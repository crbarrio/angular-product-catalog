import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GameCard } from "../../components/games/game-card/game-card";
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  imports: [GameCard],
  templateUrl: './game-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GameList { 

  gameService = inject(GameService);

}
