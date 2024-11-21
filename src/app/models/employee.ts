import { Department } from "./department";
import  {Location} from "./location";
import { Role } from "./role";
import { Status } from "./status";

export interface Employee {
    name: string;
    email: string;
    location: Location;
    department: Department;
    role: Role;
    id: string;
    empNo: string;
    status: Status;
    joinDate: string;
    img: string;
}
