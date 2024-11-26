import { Component, Input } from '@angular/core';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.scss'
})
export class RoleCardComponent {

  @Input() role! : Role;

}
