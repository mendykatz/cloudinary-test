import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {

  @ViewChild('tagname') tagname: ElementRef;

  constructor(
    public tagsSrv: TagsService
    ) { }

  ngOnInit(): void {
  }

  onRenameTag(tagName) {
    this.tagsSrv.tagNameToEdit = tagName;
    this.tagname.nativeElement.value = tagName;
    this.tagname.nativeElement.focus();
  }

}
