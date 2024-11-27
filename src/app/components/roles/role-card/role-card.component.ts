import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Role } from '../../../models/role';
import { RoleService } from '../../../services/roles/role.service';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.scss'
})
export class RoleCardComponent {

  @Input() role! : Role;
  @Output() viewEmployeesClick : EventEmitter<Role> = new EventEmitter<Role>();
  roleService : RoleService = inject(RoleService)
  employeesForRole: Employee[] = [];
  

  ngOnInit(): void {
    this.employeesForRole = this.roleService.getEmployeesOfRole(this.role);
  }


  onViewEmployeesClick(){
  this.viewEmployeesClick.emit(this.role);
  }

  

}
