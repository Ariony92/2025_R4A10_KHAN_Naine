import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagedetailComponent } from './voyagedetail.component';

describe('VoyagedetailComponent', () => {
  let component: VoyagedetailComponent;
  let fixture: ComponentFixture<VoyagedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagedetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
