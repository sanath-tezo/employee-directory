import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Employee } from '../../models/employee';
import { locations,departments,statuses,roles } from '../../data/app-static-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private employees: Employee[] = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      location: locations[0], // New York
      department: departments[0], // Engineering
      role: roles[0], // Software Engineer
      id: "E001",
      empNo: "12345",
      status: statuses[0], // Active
      joinDate: "2021-05-12",
      img: "https://randomuser.me/api/portraits/women/53.jpg"
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      location: locations[1], // San Francisco
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E002",
      empNo: "67890",
      status: statuses[0], // Active
      joinDate: "2019-08-20",
      img: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      location: locations[2], // London
      department: departments[2], // Marketing
      role: roles[2], // Marketing Specialist
      id: "E003",
      empNo: "11223",
      status: statuses[1], // Inactive
      joinDate: "2022-02-25",
      img: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      name: "Diana Green",
      email: "diana.green@example.com",
      location: locations[3], // Berlin
      department: departments[0], // Engineering
      role: roles[3], // Data Scientist
      id: "E004",
      empNo: "44556",
      status: statuses[0], // Active
      joinDate: "2023-06-30",
      img: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      name: "Emma White",
      email: "emma.white@example.com",
      location: locations[0], // New York
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E005",
      empNo: "55899",
      status: statuses[1], // Inactive
      joinDate: "2018-09-12",
      img: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
      name: "Frank Black",
      email: "frank.black@example.com",
      location: locations[1], // San Francisco
      department: departments[0], // Engineering
      role: roles[0], // Software Engineer
      id: "E006",
      empNo: "66778",
      status: statuses[0], // Active
      joinDate: "2020-01-23",
      img: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "Grace Blue",
      email: "grace.blue@example.com",
      location: locations[2], // London
      department: departments[2], // Marketing
      role: roles[2], // Marketing Specialist
      id: "E007",
      empNo: "77889",
      status: statuses[1], // Inactive
      joinDate: "2017-11-01",
      img: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      name: "Henry Smith",
      email: "henry.smith@example.com",
      location: locations[3], // Berlin
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E008",
      empNo: "88990",
      status: statuses[0], // Active
      joinDate: "2022-02-14",
      img: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Isabella Brown",
      email: "isabella.brown@example.com",
      location: locations[0], // New York
      department: departments[0], // Engineering
      role: roles[3], // Data Scientist
      id: "E009",
      empNo: "99001",
      status: statuses[0], // Active
      joinDate: "2023-04-12",
      img: "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
      name: "James Walker",
      email: "james.walker@example.com",
      location: locations[1], // San Francisco
      department: departments[1], // Sales
      role: roles[0], // Software Engineer
      id: "E010",
      empNo: "10234",
      status: statuses[0], // Active
      joinDate: "2021-03-01",
      img: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
      name: "Kimberly Harris",
      email: "kimberly.harris@example.com",
      location: locations[2], // London
      department: departments[2], // Marketing
      role: roles[2], // Marketing Specialist
      id: "E011",
      empNo: "20345",
      status: statuses[1], // Inactive
      joinDate: "2019-07-25",
      img: "https://randomuser.me/api/portraits/women/38.jpg"
    },
    {
      name: "Liam Taylor",
      email: "liam.taylor@example.com",
      location: locations[3], // Berlin
      department: departments[0], // Engineering
      role: roles[0], // Software Engineer
      id: "E012",
      empNo: "31456",
      status: statuses[0], // Active
      joinDate: "2020-12-15",
      img: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Mia Martinez",
      email: "mia.martinez@example.com",
      location: locations[0], // New York
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E013",
      empNo: "42567",
      status: statuses[1], // Inactive
      joinDate: "2018-06-10",
      img: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Noah Robinson",
      email: "noah.robinson@example.com",
      location: locations[1], // San Francisco
      department: departments[0], // Engineering
      role: roles[3], // Data Scientist
      id: "E014",
      empNo: "53678",
      status: statuses[0], // Active
      joinDate: "2021-11-30",
      img: "https://randomuser.me/api/portraits/men/28.jpg"
    },
    {
      name: "Olivia Anderson",
      email: "olivia.anderson@example.com",
      location: locations[2], // London
      department: departments[2], // Marketing
      role: roles[2], // Marketing Specialist
      id: "E015",
      empNo: "64789",
      status: statuses[1], // Inactive
      joinDate: "2017-12-12",
      img: "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      name: "Patrick Lee",
      email: "patrick.lee@example.com",
      location: locations[3], // Berlin
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E016",
      empNo: "75890",
      status: statuses[0], // Active
      joinDate: "2023-01-15",
      img: "https://randomuser.me/api/portraits/men/37.jpg"
    },
    {
      name: "Quinn Clark",
      email: "quinn.clark@example.com",
      location: locations[0], // New York
      department: departments[0], // Engineering
      role: roles[3], // Data Scientist
      id: "E017",
      empNo: "86901",
      status: statuses[1], // Inactive
      joinDate: "2019-10-09",
      img: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      name: "Rachel Young",
      email: "rachel.young@example.com",
      location: locations[1], // San Francisco
      department: departments[2], // Marketing
      role: roles[2], // Marketing Specialist
      id: "E018",
      empNo: "98012",
      status: statuses[0], // Active
      joinDate: "2022-07-11",
      img: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    {
      name: "Samuel Moore",
      email: "samuel.moore@example.com",
      location: locations[2], // London
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E019",
      empNo: "10123",
      status: statuses[0], // Active
      joinDate: "2021-02-28",
      img: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
      name: "Tessa Scott",
      email: "tessa.scott@example.com",
      location: locations[3], // Berlin
      department: departments[0], // Engineering
      role: roles[0], // Software Engineer
      id: "E020",
      empNo: "11234",
      status: statuses[0], // Active
      joinDate: "2020-08-20",
      img: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
      name: "Ursula Allen",
      email: "ursula.allen@example.com",
      location: locations[0], // New York
      department: departments[2], // Marketing
      role: roles[2], // Marketing Specialist
      id: "E021",
      empNo: "12345",
      status: statuses[1], // Inactive
      joinDate: "2019-05-17",
      img: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
      name: "Victor Harris",
      email: "victor.harris@example.com",
      location: locations[1], // San Francisco
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E022",
      empNo: "13456",
      status: statuses[0], // Active
      joinDate: "2023-09-07",
      img: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      name: "Wendy Wilson",
      email: "wendy.wilson@example.com",
      location: locations[2], // London
      department: departments[0], // Engineering
      role: roles[3], // Data Scientist
      id: "E023",
      empNo: "14567",
      status: statuses[0], // Active
      joinDate: "2022-04-22",
      img: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      name: "Xander Collins",
      email: "xander.collins@example.com",
      location: locations[3], // Berlin
      department: departments[2], // Marketing
      role: roles[2], // Marketing Specialist
      id: "E024",
      empNo: "15678",
      status: statuses[0], // Active
      joinDate: "2021-03-03",
      img: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      name: "Yara Green",
      email: "yara.green@example.com",
      location: locations[0], // New York
      department: departments[1], // Sales
      role: roles[1], // Sales Manager
      id: "E025",
      empNo: "16789",
      status: statuses[1], // Inactive
      joinDate: "2019-09-15",
      img: "https://randomuser.me/api/portraits/women/20.jpg"
    },
    {
      name: "Zane Brown",
      email: "zane.brown@example.com",
      location: locations[1], // San Francisco
      department: departments[0], // Engineering
      role: roles[3], // Data Scientist
      id: "E026",
      empNo: "17890",
      status: statuses[0], // Active
      joinDate: "2022-10-21",
      img: "https://randomuser.me/api/portraits/men/19.jpg"
    }
  ];
  
  
  
  
  
  constructor() { }
  


   filterEmployees(employees: Employee[], status : string | null, location :string | null, department : string | null, firstChar : string | null, query : string | null) : Employee[] {
    return this.employees.filter((employee) => {
        const matchesStatus = !status || employee.status.value === status;
        const matchesLocation = !location || employee.location.title === location;
        const matchesDepartment = !department || employee.department.title === department;
        const matchesFirstChar = !firstChar || employee.name[0] === firstChar;
        const matchesQuery = !query || employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        return (matchesStatus &&
            matchesLocation &&
            matchesDepartment &&
            matchesFirstChar &&
            matchesQuery);
    });
}
  getAllEmployees() : Observable<Employee[]> {
    return of(this.employees).pipe(
      delay(2000)
    );
  }
}
