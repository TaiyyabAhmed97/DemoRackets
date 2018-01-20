import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from './demoservice.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
results;
  constructor(private Demoservice: DemoserviceService ) { }

  ngOnInit() {
    this.results = this.Demoservice.getCurrdemos();
  }

}
