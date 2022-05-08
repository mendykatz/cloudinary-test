import { copyArrayItem } from '@angular/cdk/drag-drop';
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

  drop(event) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  //fix for missing placeholder.
  onSourceListExited(event) {
    const currentIdx = event.container.data.findIndex(
      (tag) => tag.name === event.item.data.name
    );

    this.tagsSrv.tagsList.splice(currentIdx + 1, 0, {
      ...event.item.data,
      temp: true,
    });
  }

  //fix for missing placeholder.
  onSourceListEntered(event) {
    this.tagsSrv.tagsList = this.tagsSrv.tagsList.filter((tag) => !tag.temp);
  }

}
