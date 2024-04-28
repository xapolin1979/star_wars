import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavesComponent } from './naves.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

// Componente falso para simular el componente de exploración de naves
@Component({ selector: 'app-explorarnaves', template: '' })
class ExploreNavesComponent { }

describe('NavesComponent', () => {
  let component: NavesComponent;
  let fixture: ComponentFixture<NavesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavesComponent, ExploreNavesComponent],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should navigate to "explorarnaves" with query parameter id', () => {
    spyOn(router, 'navigate');
    const id = 123; // ejemplo de un id de nave
    component.idNave(id);
    expect(router.navigate).toHaveBeenCalledWith(
      ['explorarnaves'],
      { queryParams: { id: id } }
    );
  });
});