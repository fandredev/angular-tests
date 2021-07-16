import { PhotoBoardMockService } from './../../shared/components/photo-board/services/photo-board.mock.service';
import { PhotoBoardService } from '../../shared/components/photo-board/services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListModule } from './photo-list.module';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PhotoListComponent } from "./photo-list.component";
import { buildPhotolist } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';

xdescribe(PhotoListComponent.name + 'Mock Provider', () => {
  let fixture: ComponentFixture<PhotoListComponent>
  let component: PhotoListComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [{
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService
      }]
    }).compileComponents()

    fixture = TestBed.createComponent(PhotoListComponent)
    component = fixture.componentInstance
  })
  it('should create component', () => {
    expect(component).toBeTruthy()
  })
  it(`(D) should display board when data arrives`, () => {

    fixture.detectChanges()

    const board = fixture.nativeElement.querySelector('.app-photo-board')
    const loader = fixture.nativeElement.querySelector('.loader')

    expect(board).withContext('should not display board').not.toBeNull()
    expect(loader).withContext('should display loader').toBeNull()
  })
})
