import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game.interfacxe';

const GAMES: Game[] = [
  {
    id: 1,
    title: 'Counter-Strike 2',
    price: 35,
    description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861',
    category: 'Shooter'
  },
  {
    id: 2,
    title: 'Dota 2',
    price: 23.50,
    description: 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if its their 10th hour of play or 1,000th, theres always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1769535998',
    category: 'RPG'
  },
  {
    id: 3,
    title: 'Bongo Cat',
    price: 26,
    description: 'Bongo cat needs your help. Bongo cat needz more hatz!!! Every time you press a key, Bongo cat will punch your taskbar. Type, click, play, work to collect more points. Which hats will you find?',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3419430/2e6c93c020fe13d09d8120bb9164ed7cb58f00c5/header.jpg?t=1776080084',
    category: 'Adventure'
  },
  {
    id: 4,
    title: 'Slay the Spire 2',
    price: 33.90,
    description: "The iconic roguelike deckbuilder returns. Craft a unique deck, encounter bizarre creatures, and discover relics of immense power in Slay the Spire 2!",
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2868840/b0958d387dc366211e0f353443710cfcf9fdb020/header.jpg?t=1776735385',
    category: 'RPG'
  },
  {
    id: 5,
    title: 'Apex Legends',
    price: 23.50,
    description: 'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/5f9cd40d1507568651688af121d378dab35d3d35/header.jpg?t=1770753360',
    category: 'Online Shooter'
  },
  {
    id: 6,
    title: 'Rust',
    price: 29,
    description: 'The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife, other inhabitants, the environment, and other survivors. Do whatever it takes to last another night.',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1776257232',
    category: 'Survival'
  },
  {
    id: 7,
    title: 'Delta Force',
    price: 23.50,
    description: 'Play for free in operator-based extraction and full-scale combined arms warfare. Become elite Operators, customize an ever-expanding arsenal of weapons, and deploy into thrill-packed missions across multiple modes.',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2507950/cea88d74c3fd2cd872e83dab8be8b7557ae9dc48/header.jpg?t=1776894033',
    category: 'Adventure'
  },
  {
    id: 8,
    title: 'Wallpaper Engine',
    price: 15,
    description: "Use stunning live wallpapers on your desktop. Animate your own images to create new wallpapers or import videos/websites and share them on the Steam Workshop!",
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/431960/header.jpg?t=1739211362',
    category: 'Various'
  },
  {
    id: 9,
    title: 'Stardew Valley',
    price: 5.90,
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1754692865',
    category: 'Farm Simulator'
  },
  {
    id: 10,
    title: 'Crimson Desert',
    price: 23.50,
    description: "Crimson Desert is an open-world action-adventure set on the continent of Pywel. Join Kliff on his journey to rebuild the Greymane faction and to save the land from a looming threat. From vast wilderness and cities to ruins and the mysterious Abyss, forge your path through battles and discovery.",
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3321460/abd7dbdeaede8b6c9a6d40bf116ff2b883f2dd45/header.jpg?t=1777016399',
    category: 'RPG'
  }
]

@Injectable({
  providedIn: 'root'
})
export class GameService {

  getGames(): Game[] {
    return GAMES;
  }
  

}
