import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employees/employee.service';
import { LoadingComponent } from "../../common/loading/loading.component";
import { EmployeeCardComponent } from "../employee-card/employee-card.component";

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeCardComponent],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  @Input()  employees! : Employee[] ;
  employeeService : EmployeeService = inject(EmployeeService);
  selectAll: boolean = false;
  sortBy: keyof Employee = 'name';
  sortOrder: boolean = true;  
  onHeadCheckboxChange() {
    this.employees.forEach(emp => {
      emp.selected = this.selectAll;
    });
  }


  sortColumn(column: keyof Employee) {
    // Toggle sort order if same column is clicked again
    if (this.sortBy === column) {
      this.sortOrder = !this.sortOrder;
    } else {
      this.sortBy = column;
      this.sortOrder = true;  // Default to ascending
    }
    this.sortEmployees();
  }

  sortEmployees() {
    if (this.sortBy) {
      this.employees.sort((a, b) => {
        let valA = a[this.sortBy];
        let valB = b[this.sortBy];
        
        if (this.sortBy === 'location' || this.sortBy === 'department' || this.sortBy === 'role') {
          // Handling objects for location, department, and role (sorting by title)
          valA = a[this.sortBy].title;
          valB = b[this.sortBy].title;
        }
        if(this.sortBy === 'status'){
          valA = a[this.sortBy].value;
          valB = b[this.sortBy].value;
        }
        
        if (valA < valB) {
          return this.sortOrder ? -1 : 1;
        } else if (valA > valB) {
          return this.sortOrder ? 1 : -1;
        }
        return 0;
      });
    }
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
