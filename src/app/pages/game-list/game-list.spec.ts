import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import GameList from './game-list';
import { Game } from '../../interfaces/game.interfacxe';
import { provideRouter } from '@angular/router';
import { GAMES, GameService } from '../../services/game.service';

@Component({
  template: '',
})

class DummyGameDetails {}

const games: Game[] = GAMES

describe('GameList', () => {
  let component: GameList;
  let fixture: ComponentFixture<GameList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameList],
      providers: [provideRouter([{ path: 'products/:id', component: DummyGameDetails }]),
        {
          provide: GameService,
          useValue: {
            getGames: () => games,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the games returned by the service', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const renderedTitles = Array.from(compiled.querySelectorAll('h2')).map(element => element.textContent?.trim());

    expect(renderedTitles).toEqual([
      'Counter-Strike 2', 
      'Dota 2',
      'Bongo Cat',
      'Slay the Spire 2',
      'Apex Legends',
      'Rust',
      'Delta Force',
      'Wallpaper Engine',
      'Stardew Valley',
      'Crimson Desert'
    ]);
  });





});
