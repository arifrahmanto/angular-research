import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MyComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    const url: Observable<any> = route.url;
    url.subscribe(x => {
      console.log(`MyComponent in MyModule URL: ${JSON.stringify(x)}`);
    });
    console.log(`MyComponent in MyModule Outlet: ${route.outlet}`);
  }

  ngOnInit() {
  }

}
