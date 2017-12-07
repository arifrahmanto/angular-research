import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouterOutletComponent } from './my-router-outlet.component';

describe('MyRouterOutletComponent', () => {
  let component: MyRouterOutletComponent;
  let fixture: ComponentFixture<MyRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
