import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuburarchivoComponent } from './suburarchivo.component';

describe('SuburarchivoComponent', () => {
  let component: SuburarchivoComponent;
  let fixture: ComponentFixture<SuburarchivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuburarchivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuburarchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
