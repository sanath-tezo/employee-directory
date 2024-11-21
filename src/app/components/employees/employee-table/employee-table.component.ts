import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  @Input()  employees! : Employee[] ;

}
