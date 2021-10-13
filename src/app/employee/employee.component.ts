import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'employee',
  template: `
    <div *ngFor="let emp of employees | searchFilter: qury">
    <ul>
      <li>
        {{emp.name}} {{emp.title}}
        <employee [employees]="emp.subordinates" *ngIf="emp.subordinates"></employee>
      </li>
    </ul>
    </div>
`,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employees:any;
  public searchFilter: any = '';
  @Input() qury: any;

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
