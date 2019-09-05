import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadorEditarComponent } from './marcador-editar.component';

describe('MarcadorEditarComponent', () => {
  let component: MarcadorEditarComponent;
  let fixture: ComponentFixture<MarcadorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcadorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcadorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
