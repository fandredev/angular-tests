import { Photo } from './../interfaces/photo';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, map } from 'rxjs/operators';

@Injectable()
export class PhotoBoardService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos')
      .pipe(map(photos => {
        return photos.map(photo => {
          return { ...photo, description: photo.description.toLowerCase() }
        })
      }))
      .pipe(delay(2000))
  }
}
