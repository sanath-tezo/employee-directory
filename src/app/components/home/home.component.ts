import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccessRightsComponent } from "../access-rights/access-rights/access-rights.component";
import { DashboardComponent } from "../dashboard/dashboard/dashboard.component";
import { HomeContentComponent } from "../home-content/home-content.component";
import { RolesComponent } from "../roles/roles/roles.component";
import { SideNavComponent } from "../side-nav/side-nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideNavComponent, HomeContentComponent, CommonModule, DashboardComponent, AccessRightsComponent, RolesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
  selectedDepartment : string = "roles";
  isSideNavVisible: boolean = true;

  toggleSideNav(visibility: boolean): void {
    this.isSideNavVisible = visibility;
  }
  onSectionSelected(selectedDepartment : string){
    this.selectedDepartment = selectedDepartment;
  }

}
