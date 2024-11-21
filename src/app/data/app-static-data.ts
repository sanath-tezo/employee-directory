import { Department } from "../models/department";
import { Location } from "../models/location";
import { Role } from "../models/role";
import { Status } from "../models/status";

// List of Departments
export const departments: Department[] = [
  { title: "Engineering", id: "ENG01" },
  { title: "Sales", id: "SAL01" },
  { title: "Marketing", id: "MKT01" }
];

// List of Locations
export const locations: Location[] = [
  { title: "New York", id: "NY001" },
  { title: "San Francisco", id: "SF001" },
  { title: "London", id: "LDN001" },
  { title: "Berlin", id: "BER001" }
];

// List of Roles
export const roles: Role[] = [
  { title: "Software Engineer", department: "Engineering", location: "New York", id: "SE001" },
  { title: "Sales Manager", department: "Sales", location: "San Francisco", id: "SM001" },
  { title: "Marketing Specialist", department: "Marketing", location: "London", id: "MS001" },
  { title: "Data Scientist", department: "Engineering", location: "Berlin", id: "DS001" }
];

// List of Statuses
export const statuses: Status[] = [
  { id: "ACTIVE", value: "Active" },
  { id: "INACTIVE", value: "Inactive" }
];