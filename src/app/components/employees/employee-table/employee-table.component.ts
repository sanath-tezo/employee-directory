import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employees/employee.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  @Input()  employees! : Employee[] ;
  employeeService : EmployeeService = inject(EmployeeService);
  selectAll: boolean = false;
  onHeadCheckboxChange() {
    this.employees.forEach(emp => {
      emp.selected = this.selectAll;
    });
  }

  resetCheckboxes() {
    this.employees.forEach(emp => {
      emp.selected = false;
    });
    this.selectAll = false;
  }

   // Method to update the head checkbox when employee checkboxes change
   onEmployeeCheckboxChange() {
    const selectedEmployees = this.employees.filter(emp => emp.selected).length;
    const totalEmployees = this.employees.length;

    // If all employees are selected, select the head checkbox
    this.selectAll = selectedEmployees === totalEmployees;

    // If some employees are selected, set head checkbox as indeterminate
    if (selectedEmployees > 0 && selectedEmployees < totalEmployees) {
      this.selectAll = false;  // Don't fully select the head checkbox, but show indeterminate state
    }
  }

  deleteSelectedEmployees() {
     const selectedEmployees = this.employees.filter(emp => emp.selected);
     this.employees= this.employeeService.deleteEmployees(selectedEmployees);
     this.resetCheckboxes();
  }

  isAnyEmployeeSelected(): boolean {
    return this.employees.some(emp => emp.selected);
  }

  isEmployeeActive(emp : Employee) : boolean{
      return emp.status.value === "Active";
  }

}
