import { PhotoBoardModule } from './photo-board.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardComponent } from './photo-board.component';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { buildPhotolist } from './test/build-photo-list';


xdescribe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display rows and columns when (@Input photos) has value`, () => {
    component.photos = buildPhotolist()
    fixture.detectChanges()
    const changes: SimpleChanges = { // Forma melhor de testar ngOnChanges
      photos: new SimpleChange([], component.photos, true)
    }
    component.ngOnChanges(changes)
    expect(component.rows.length).withContext('Number of rows').toBe(2)
    expect(component.rows[0].length).withContext('Number of columns from the first row').toBe(4)
    expect(component.rows[1].length).withContext('Number of columns from the first row').toBe(4)
    expect(component.rows[2].length).withContext('Number of columns from the first row').toBe(4)
  })
});
