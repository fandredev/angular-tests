import { PhotoBoardService } from './../../shared/components/photo-board/services/photo-board.service';
import { Photo } from './../../shared/components/photo-board/interfaces/photo';
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<Photo[]>
  fa = { faCircleNotch }

  constructor(private service: PhotoBoardService) { }
  ngOnInit(): void {
    this.photos$ = this.service.getPhotos()
  }
}
