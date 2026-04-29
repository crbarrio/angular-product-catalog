import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-game-details',
  imports: [],
  template: `<p>game-details works!</p>`,
  styleUrl: './game-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameDetails { }
