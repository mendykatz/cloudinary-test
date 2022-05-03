import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  photosArr: any = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    this.http.get('https://picsum.photos/v2/list').subscribe({
      next: (res: any) => {
        this.photosArr = res;
      }
    })
  }

}
