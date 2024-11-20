import { Component } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { HomeContentComponent } from "../home-content/home-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideNavComponent, HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
