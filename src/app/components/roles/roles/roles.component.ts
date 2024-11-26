import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Role } from '../../../models/role';
import { RoleService } from '../../../services/roles/role.service';
import { FilterBarComponent } from "../../employees/filter-bar/filter-bar.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { RoleCardComponent } from "../role-card/role-card.component";

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, RoleCardComponent, FilterBarComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {


  rolesService : RoleService = inject(RoleService);
  filteredRoles : Role[] = [];
  allRoles : Role[] = [];
  selectedLocation : string | null = null;
  selectedDepartment : string | null = null;
  searchQuery : string | null = null;
   constructor() {
    this.filteredRoles = this.rolesService.getAllRoles();
    this.allRoles = this.rolesService.getAllRoles();
   }
  
  applyFilters(
    
  ){
    this.filteredRoles = this.rolesService.filterRoles(this.selectedLocation, this.selectedDepartment, this.searchQuery);
  }

   onCategoryFiltersApplied(filters: { status: string | null, location: string | null, department: string | null }){
   this.selectedDepartment = filters.department;
   this.selectedLocation = filters.location;
   this.applyFilters();
   }

   onSearchQueryChanged(query: string | null){
    this.searchQuery = query;
    this.applyFilters();
   }

  

}
