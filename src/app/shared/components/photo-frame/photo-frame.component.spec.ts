import { PhotoFrameModule } from './photo-frame.module';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';


describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null
  let component: PhotoFrameComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    }).compileComponents()

    fixture = TestBed.createComponent(PhotoFrameComponent)
    component = fixture.componentInstance
  })
  it('should create component', () => {
    expect(component).toBeTruthy()
  })
  it(`(D) should display image with src and description when bound to properties`, () => {
    const description = 'some description'
    const src = 'http://somesite.com/img.jpg'
    component.src = src
    component.description = description
    fixture.detectChanges()
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img')
    expect(img.getAttribute('src')).toBe(src)
    expect(img.getAttribute('alt')).toBe(description)
  })

  it(`(D) should update aria-label when (@Input likes) is incremented`, () => {
    fixture.detectChanges()
    component.likes++
    fixture.detectChanges()
    const element = fixture.nativeElement.querySelector('span') as HTMLElement
    expect(element.getAttribute('aria-label')).toBe('1: people liked')
  })
  it(`(D) should aria-label with 0 (@Input likes)`, () => {
    fixture.detectChanges()
    const element = fixture.nativeElement.querySelector('span') as HTMLElement
    expect(element.getAttribute('aria-label')).toBe('0: people liked')
  })
  it(`(D) should display number of likes when (@Input likes) is increment`, () => {
    fixture.detectChanges() // Chama Lifecycle
    component.likes++
    fixture.detectChanges() // Renderiza a dom depois de mudar o estado
    const element = fixture.nativeElement.querySelector('.like-counter') as HTMLElement
    expect(element.textContent.trim()).toBe('1')
  })

  it(`#${PhotoFrameComponent.prototype.like.name}
  should trigger (@Output liked) once when called multiple times within debounce time`,
    fakeAsync(() => {
      fixture.detectChanges()
      let times = 0
      component.liked.subscribe(() => times++)
      component.like()
      component.like()
      tick(500)
      expect(times).toBe(1)
    }))

  it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) two times when called outside debounce time`,
    fakeAsync(() => {
      fixture.detectChanges()
      let times = 0
      component.liked.subscribe(() => times++)
      component.like()
      tick(500)
      component.like()
      tick(500)
      expect(times).toBe(2)
    }))
})
