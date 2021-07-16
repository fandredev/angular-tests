import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})

export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Input() description = ''
  @Input() src = ''
  @Input() likes = 0
  @Output() liked: EventEmitter<void> = new EventEmitter()

  private debounceSubject: Subject<void> = new Subject()
  private unsubscribe: Subject<void> = new Subject()

  ngOnInit(): void {
    this.debounceSubject.asObservable().
      pipe(debounceTime(400))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.liked.emit())
  }
  ngOnDestroy() {
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }
  like() {
    this.debounceSubject.next()
  }
}
