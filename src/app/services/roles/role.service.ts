import { Injectable } from '@angular/core';
import { roles } from '../../data/app-static-data';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  private allRoles = roles;

  getAllRoles() : Role[]{
   return this.allRoles;
  }
}
