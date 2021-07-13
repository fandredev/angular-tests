import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {
  @Output() liked = new EventEmitter<void>()
  @Input() likes = 0
  @Input() id: string = null
  fonts = {
    faThumbsUp
  }

  constructor(private _uniqueIdService: UniqueIdService){}

  ngOnInit() : void {
    if(!this.id)
      this.id = this._uniqueIdService.generateUniqueIdWithPrefix('like-widget')
  }

  like() : void {
    this.liked.emit()
  }
}
