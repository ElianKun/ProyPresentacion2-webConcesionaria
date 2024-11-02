import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListautosComponent } from './listautos.component';

describe('ListautosComponent', () => {
  let component: ListautosComponent;
  let fixture: ComponentFixture<ListautosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListautosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListautosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
