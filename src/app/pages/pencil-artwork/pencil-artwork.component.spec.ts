import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilArtworkComponent } from './pencil-artwork.component';

describe('PencilArtworkComponent', () => {
  let component: PencilArtworkComponent;
  let fixture: ComponentFixture<PencilArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PencilArtworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PencilArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
