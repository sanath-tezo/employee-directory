import { Component, inject } from '@angular/core';
import { EmployeeDescriptionComponent } from "../../employees/employee-description/employee-description.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { RoleService } from '../../../services/roles/role.service';
import { CommonModule } from '@angular/common';
import { RoleCardComponent } from "../role-card/role-card.component";
import { FilterBarComponent } from "../../employees/filter-bar/filter-bar.component";

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, RoleCardComponent, FilterBarComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {


  rolesService : RoleService = inject(RoleService);



  

}
