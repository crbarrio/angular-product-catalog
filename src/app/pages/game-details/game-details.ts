import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-details',
  imports: [RouterLink],
  templateUrl: './game-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GameDetails { 

  gameService = inject(GameService);

  gameId = toSignal<number>(
    inject(ActivatedRoute).params.pipe(
      map(params => params['id']),
      map(param => parseInt(param))
    )
  )

  selectedGame = computed(() => {
    const id = this.gameId();
    return id ? this.gameService.getGameById(id) : null;
  });


}
