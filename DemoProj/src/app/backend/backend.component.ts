import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
name;
  constructor(private backEndService: BackendService) { }

  ngOnInit() {
    this.name = this.backEndService.getItems();
  }

}
