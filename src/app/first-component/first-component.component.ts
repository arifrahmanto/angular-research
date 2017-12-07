import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    const url: Observable<any> = route.url;
    url.subscribe(x => {
      console.log(`FirstComponent URL: ${JSON.stringify(x)}`);
    });
    console.log(`FirstComponent Outlet: ${route.outlet}`);
  }

  ngOnInit() {
  }

}
