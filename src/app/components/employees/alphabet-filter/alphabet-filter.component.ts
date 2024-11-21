import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeService } from '../../../services/employees/employee.service';


@Component({
  selector: 'app-alphabet-filter',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './alphabet-filter.component.html',
  styleUrl: './alphabet-filter.component.scss'
})
export class AlphabetFilterComponent {
employeeService : EmployeeService = inject(EmployeeService);
alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
selectedLetter: string | null = null;
@Output() filterChanged: EventEmitter<string | null> = new EventEmitter<string | null>();

  filterByLetter(alphabet:string){
    if (this.selectedLetter === alphabet) {
      this.selectedLetter = null;
      this.filterChanged.emit(null);
    } else {
      this.selectedLetter = alphabet;
      this.filterChanged.emit(alphabet); 
    }
   
  }
}
