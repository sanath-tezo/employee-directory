import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Role } from '../../../models/role';
import { EmployeeService } from '../../../services/employees/employee.service';
import { RoleService } from '../../../services/roles/role.service';
import { EmployeeCardComponent } from "../../employees/employee-card/employee-card.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";

@Component({
  selector: 'app-role-details',
  standalone: true,
  imports: [EmployeeCardComponent, CommonModule, SearchBarComponent],
  templateUrl: './role-details.component.html',
  styleUrl: './role-details.component.scss'
})
export class RoleDetailsComponent {

  @Input() role! : Role;
  filteredEmployees : Employee[] = [];
  employeesOfRole : Employee[] = [];
  roleService : RoleService = inject(RoleService);
  employeeService : EmployeeService = inject(EmployeeService);
  
  ngOnInit(){
    this.employeesOfRole = this.roleService.getEmployeesOfRole(this.role);
    this.filteredEmployees = this.employeesOfRole;
  }
  onSearchTextChanged(searchText: string | null){
    if(searchText){
     this.filteredEmployees = this.employeeService.filterEmployees(null,null,null,null,searchText);
    }else{
      this.filteredEmployees = this.employeesOfRole;
    }
  }


}
