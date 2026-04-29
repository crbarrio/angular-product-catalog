import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCard } from './game-card';
import { provideRouter } from '@angular/router';
import { inputBinding, signal } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

describe('GameCard', () => {
  let component: GameCard;
  let fixture: ComponentFixture<GameCard>;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCard],
      providers: [
        provideRouter([
          {
            path: 'products/:id', component: GameCard 
          }
        ]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GameCard, {
      bindings: [
        inputBinding('game', signal([]))
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
    harness = await RouterTestingHarness.create()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
