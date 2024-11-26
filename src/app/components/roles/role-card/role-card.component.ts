import { Component, inject, Input } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Role } from '../../../models/role';
import { RoleService } from '../../../services/roles/role.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.scss'
})
export class RoleCardComponent {

  @Input() role! : Role;
  roleService : RoleService = inject(RoleService)
  employeesForRole: Employee[] = [];

  ngOnInit(): void {
    this.employeesForRole = this.roleService.getEmployeesOfRole(this.role);
  }


  

}
