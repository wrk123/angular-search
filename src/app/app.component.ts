import { AppServiceService } from './app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private app_service: AppServiceService) {}

  public searchFilter: any = '';
  query: any;
  fetchData = [];

  ngOnInit() {
    this.app_service.getData().subscribe((data) => this.fetchData = data );
    
  }

}
