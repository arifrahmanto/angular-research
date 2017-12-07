import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    const url: Observable<any> = route.url;
    url.subscribe(x => {
      console.log(`SecondComponent URL: ${JSON.stringify(x)}`);
    });
    console.log(`SecondComponent Outlet: ${route.outlet}`);
  }

  ngOnInit() {
  }

}
