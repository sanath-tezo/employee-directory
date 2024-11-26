import { Department } from "./department";
import { Location } from "./location";

export interface Role {
    title: string;
    department: Department;
    location: Location;
    id: string;
  }