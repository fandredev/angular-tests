import { PhotoBoardService } from './../../shared/components/photo-board/services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListModule } from './photo-list.module';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PhotoListComponent } from "./photo-list.component";
import { buildPhotolist } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { of } from 'rxjs';

xdescribe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>
  let component: PhotoListComponent
  let service: PhotoBoardService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule]
    }).compileComponents()

    fixture = TestBed.createComponent(PhotoListComponent)
    component = fixture.componentInstance
    service = TestBed.inject(PhotoBoardService)
  })
  it('should create component', () => {
    expect(component).toBeTruthy()
  })
  it(`(D) should display board when data arrives`, () => {
    const photos = buildPhotolist()
    spyOn(service, 'getPhotos').and.returnValue(of(photos))
    // Observe o serviço, use o getPhotos e retorne o valor. o of diz que a variavel é um observable
    fixture.detectChanges()
    // Preciso chamar depois de eu verificar o serviço

    const board = fixture.nativeElement.querySelector('.app-photo-board')
    const loader = fixture.nativeElement.querySelector('.loader')

    expect(board).withContext('should not display board').not.toBeNull()
    expect(loader).withContext('should display loader').toBeNull()
  })
  it(`(D) should display loader while wait for data`, () => {
    spyOn(service, 'getPhotos').and.returnValue(null)
    // Observe o serviço, use o getPhotos e retorne o valor. o of diz que a variavel é um observable
    fixture.detectChanges()
    // Preciso chamar depois de eu verificar o serviço

    const board = fixture.nativeElement.querySelector('.app-photo-board')
    const loader = fixture.nativeElement.querySelector('.loader')

    expect(board).withContext('should not display board').toBeNull()
    expect(loader).withContext('should not display loader').not.toBeNull()
  })
})
