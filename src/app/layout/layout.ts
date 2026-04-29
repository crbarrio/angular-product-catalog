import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from "../components/shared/navbar/navbar";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet],
  templateUrl: './layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Layout { }
