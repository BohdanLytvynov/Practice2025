import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpu } from './cpu';

describe('Cpu', () => {
  let component: Cpu;
  let fixture: ComponentFixture<Cpu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cpu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cpu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
