import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { EmployeeDescriptionComponent } from "../employees/employee-description/employee-description.component";
import { AlphabetFilterComponent } from "../employees/alphabet-filter/alphabet-filter.component";
import { FilterBarComponent } from "../employees/filter-bar/filter-bar.component";
import { EmployeeTableComponent } from "../employees/employee-table/employee-table.component";

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [SearchBarComponent, EmployeeDescriptionComponent, AlphabetFilterComponent, FilterBarComponent, EmployeeTableComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {

}
