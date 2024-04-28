import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarNavesComponent } from './explorar-naves.component';

describe('ExplorarNavesComponent', () => {
  let component: ExplorarNavesComponent;
  let fixture: ComponentFixture<ExplorarNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorarNavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorarNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
