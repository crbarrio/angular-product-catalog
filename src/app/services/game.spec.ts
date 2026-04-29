import { TestBed } from '@angular/core/testing';
import { GameService } from "./game.service";
import { Game } from '../interfaces/game.interfacxe';

describe('Game', () => {
  let service: GameService;
  let games: Game[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
    games = service.getGames();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with a list of ten elements', () => {
    expect(games.length).toBe(10);
  });

  it('should return the correct game by id', () => {
    const game = service.getGameById(1);

    expect(game).toEqual({
      id: 1,
      title: 'Counter-Strike 2',
      price: 35,
      description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861',
      category: 'Shooter'
    });
  });

  it('should return null for non-existent game id', () => {
    const book = service.getGameById(999);

    expect(book).toBeNull();
  });


});
