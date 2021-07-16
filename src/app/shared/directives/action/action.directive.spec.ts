import { ActionDirectiveModule } from './action.module';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActionDirective } from "./action.directive";
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>
  let component: ActionDirectiveTestComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule],
    }) // sem compile components pq nao tenho html

    fixture = TestBed.createComponent(ActionDirectiveTestComponent)
    component = fixture.componentInstance
  })

  it(`(D) (@Output appAction) should emit with payload when ENTER key is pressed`, () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component')
    // const divEl = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement
    const event = new KeyboardEvent('keyup', { key: 'Enter' })
    divEl.dispatchEvent(event)
    expect(component.hasEvent()).toBeTrue()
  })

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component')
    const event = new Event('click')
    divEl.dispatchEvent(event)
    expect(component.hasEvent()).toBeTrue()
  })
})

@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"><div>`
})
class ActionDirectiveTestComponent {
  private event: Event = null

  actionHandler(event: Event): void {
    this.event = event
  }
  hasEvent(): boolean {
    return !!this.event
  }
}
