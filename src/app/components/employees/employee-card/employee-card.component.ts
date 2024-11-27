import { Component, Input } from '@angular/core';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
}
