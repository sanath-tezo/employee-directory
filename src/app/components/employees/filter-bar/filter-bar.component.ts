import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { departments, locations, statuses } from '../../../data/app-static-data';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employees/employee.service';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {
  statuses = statuses;  
  locations = locations;  
  departments = departments;  // Same for departments
  // Variables for selected dropdown values
  selectedStatus: string | null = null;
  selectedLocation: string | null = null;
  selectedDepartment: string | null = null;
  @Output() filtersApplied = new EventEmitter<any>();
  filterResult : Employee[] = [];

  

  constructor(private readonly employeeService: EmployeeService) { }

  private emitFilters(): void {
    this.filtersApplied.emit({
      status: this.selectedStatus,
      location: this.selectedLocation,
      department: this.selectedDepartment,
    });
  }

  // Reset filters method
  resetFilters(): void {
    this.selectedStatus = null;
    this.selectedLocation = null;
    this.selectedDepartment = null;
    this.emitFilters();
  }



  applyFilters(): void {
    this.emitFilters();
  }
}
