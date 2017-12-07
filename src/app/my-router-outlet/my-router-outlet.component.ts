import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-router-outlet',
  templateUrl: './my-router-outlet.component.html',
  styleUrls: ['./my-router-outlet.component.css']
})
export class MyRouterOutletComponent implements OnInit {
  @Input() routerName = 'test';

  constructor(route: ActivatedRoute) {
    const url: Observable<any> = route.url;
    url.subscribe(x => {
      console.log(`OutletComponent URL: ${JSON.stringify(x)}`);
    });
    console.log(`OutletComponent Outlet: ${route.outlet}`);
  }

  ngOnInit() {
  }

}
