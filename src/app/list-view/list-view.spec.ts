import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListView } from './list-view';

describe('ListView', () => {
  let component: ListView;
  let fixture: ComponentFixture<ListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
