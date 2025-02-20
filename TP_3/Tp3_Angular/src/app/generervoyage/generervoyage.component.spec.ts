import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerervoyageComponent } from './generervoyage.component';

describe('GenerervoyageComponent', () => {
  let component: GenerervoyageComponent;
  let fixture: ComponentFixture<GenerervoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerervoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerervoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
