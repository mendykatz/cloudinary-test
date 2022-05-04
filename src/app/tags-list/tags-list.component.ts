import { Component, OnInit } from '@angular/core';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {

  constructor(
    public tagsSrv: TagsService
    ) { }

  ngOnInit(): void {
  }

}
