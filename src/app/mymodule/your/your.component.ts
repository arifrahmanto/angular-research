import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-your',
  templateUrl: './your.component.html',
  styleUrls: ['./your.component.css']
})
export class YourComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    const url: Observable<any> = route.url;
    url.subscribe(x => {
      console.log(`YorComponent in MyModule URL: ${JSON.stringify(x)}`);
    });
    console.log(`YourComponent in MyModule Outlet: ${route.outlet}`);
  }

  ngOnInit() {
  }

}
