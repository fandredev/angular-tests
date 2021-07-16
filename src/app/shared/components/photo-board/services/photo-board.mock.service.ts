import { buildPhotolist } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotoBoardService } from './photo-board.service';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {

  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotolist())
  }
}
