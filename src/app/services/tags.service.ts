import { Injectable } from '@angular/core';
import { MessageBusService } from './message-bus.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  tagsList: any = [];

  constructor(
    private messageBus: MessageBusService
  ) { }

  onSaveTag(tagName: string) {
    tagName = tagName.trim();
    if(!tagName) return;

    if(this.tagsList.some((tag: any) => tag.name == tagName)) return;

    let color = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });

    let newTag = {
      name: tagName,
      color: color
    }

    this.tagsList.push(newTag);
  }

  onDeleteTag(tagName: string) {

    this.tagsList = this.tagsList.filter((tag: any) => tag.name != tagName);

    this.messageBus.emit({
      name: 'tagRemoved',
      value: tagName,
      sender: this
    })

  }
}
