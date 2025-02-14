import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleitemsComponent } from './articleitems.component';

describe('ArticleitemsComponent', () => {
  let component: ArticleitemsComponent;
  let fixture: ComponentFixture<ArticleitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
