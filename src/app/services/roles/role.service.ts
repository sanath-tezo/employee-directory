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

  filterRoles( location : string | null, department : string | null , query : string | null) : Role[]{

    return this.allRoles.filter((role) => {
        const matchesLocation = !location || role.location.title === location;
        const matchesDepartment = !department || role.department.title === department;
        const matchesQuery = !query || role.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        return (matchesDepartment && matchesLocation && matchesQuery);
    });

  }
}
