import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';


describe(LikeWidgetComponent.name,() => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null
  let component: LikeWidgetComponent = null

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //  Testando antes de codar

      // declarations: [LikeWidgetComponent],
      // providers: [UniqueIdService],
      // imports: [FontAwesomeModule]

      // Testando depois de codar
      imports: [LikeWidgetModule]
    }).compileComponents()

    fixture = TestBed.createComponent(LikeWidgetComponent)
    component = fixture.componentInstance
  })

  it('should create component',() => {
    expect(component).toBeTruthy()
  })

  it('should auto generate ID during ngOnInit when (@Input id) is not assigned',() => {
    fixture.detectChanges() // Inicia a detecção de lifecycle
    expect(component.id).toBeTruthy()
  })

  it('should not auto generate id during ngOnInit when (@Input id) is assigned',() => {
    const someId = 'someId'
    component.id = someId
    fixture.detectChanges() // Inicia a detecção de lifecycle
    expect(component.id).toBe(someId)
  })

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`,
    () => {
      // Metodo mais fácil

      spyOn(component.liked, 'emit') // Espione a função
      fixture.detectChanges()
      component.like()
      expect(component.liked.emit).toHaveBeenCalled()


      // Metodo mais hard coded
      // component.liked.subscribe(() => {
      //   expect(true).toBeTrue()
      //   done() // Adicionar o done porque o subscriber é assinado e assincrono e preciso informar que deu success.
      // })
      // component.like()

  })
})
