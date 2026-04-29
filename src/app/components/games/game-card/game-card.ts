import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-game-card',
  imports: [],
  template: `<p>game-card works!</p>`,
  styleUrl: './game-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCard { }
