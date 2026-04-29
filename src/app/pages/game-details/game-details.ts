import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-game-details',
  imports: [RouterLink],
  templateUrl: './game-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GameDetails { 

  gameId = toSignal<string>(
    inject(ActivatedRoute).params.pipe(
      map(params => params['id'])
    )
  )
}
