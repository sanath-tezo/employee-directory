import { Component, inject, ViewChild } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employees/employee.service';
import { LoadingComponent } from "../common/loading/loading.component";
import { AlphabetFilterComponent } from "../employees/alphabet-filter/alphabet-filter.component";
import { EmployeeDescriptionComponent } from "../employees/employee-description/employee-description.component";
import { EmployeeTableComponent } from "../employees/employee-table/employee-table.component";
import { FilterBarComponent } from "../employees/filter-bar/filter-bar.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [SearchBarComponent, EmployeeDescriptionComponent, AlphabetFilterComponent, FilterBarComponent, EmployeeTableComponent, LoadingComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {
  @ViewChild(EmployeeTableComponent) employeeTable!: EmployeeTableComponent;


  employees: Employee[] = []; 
  isLoading: boolean = true; 
  filteredEmployees: Employee[] = []; 
  selectedLetter: string | null = null;
  searchQuery : string  | null = null;  
  employeesService : EmployeeService = inject(EmployeeService);
  selectedStatus : string  | null = null;
  selectedLocation : string  | null = null;
  selectedDepartment : string  | null = null;

  constructor() {
    
  }

  ngOnInit(){

    const data = this.employeesService.getAllEmployees()
        this.employees = data;
        this.filteredEmployees = data;
        this.isLoading = false;
  }
  applyFilter() : Employee[]{
   return this.employeesService.filterEmployees(
      this.selectedStatus,
      this.selectedLocation,
      this.selectedDepartment,
      this.selectedLetter,
      this.searchQuery
    );
  }
  onCategoryFiltersApplied(filters: { status: string | null, location: string | null, department: string | null }) {
    this.employeeTable.resetCheckboxes();
    this.selectedDepartment = filters.department;
    this.selectedLocation = filters.location;
    this.selectedStatus = filters.status;
    this.filteredEmployees = this.applyFilter();
  }
  onAlphabetFilterChanged(letter : string | null){
    this.selectedLetter = letter;
    
      this.filteredEmployees =  this.applyFilter();
    

  }

  onSearchTextChanged(query : string | null){
    this.searchQuery = query;
      this.filteredEmployees = this.applyFilter();
  }
  

}
