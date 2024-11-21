import { Component, inject } from '@angular/core';
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

  employees: Employee[] = []; 
  isLoading: boolean = true; 
  filteredEmployees: Employee[] = []; 
  selectedLetter: string | null = null;
  searchQuery : string  | null = null;  
  employeesService : EmployeeService = inject(EmployeeService);

  constructor() {
    
  }

  ngOnInit(){

    this.employeesService.getAllEmployees().subscribe(
      (data : Employee[]) => {
        this.employees = data;
        this.filteredEmployees = data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  onAlphabetFilterChanged(letter : string | null){
    this.selectedLetter = letter;
    if(letter){
      this.filteredEmployees = this.employeesService.filterEmployees(this.filteredEmployees, null,null,null,this.selectedLetter,this.searchQuery);
    }else{
      this.filteredEmployees = this.employees;
    }

  }

  onSearchTextChanged(query : string | null){
    this.searchQuery = query;
    
      this.filteredEmployees = this.employeesService.filterEmployees(this.filteredEmployees, null,null,null,this.selectedLetter,this.searchQuery);
    
  }
  

}
