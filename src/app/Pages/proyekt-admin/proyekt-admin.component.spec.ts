import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyektAdminComponent } from './proyekt-admin.component';

describe('ProyektAdminComponent', () => {
  let component: ProyektAdminComponent;
  let fixture: ComponentFixture<ProyektAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyektAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyektAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
