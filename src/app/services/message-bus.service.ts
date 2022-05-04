import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from "rxjs";

import { filter } from "rxjs/operators";

export type EmitEvent = {
  name: string
  value: any
  sender: any
}

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  private subject$ = new Subject<EmitEvent>();

  constructor() {

  }

  on(event: string, action: (event: EmitEvent) => any): Subscription {

    return this.getFilteredObservable(event)
      .subscribe(action)
  }

  onAny(event: string[], action: (event: EmitEvent) => any): Subscription {

    return this.getFilteredObservable(event)
      .subscribe(action)
  }

  getFilteredObservable(evenType: any): Observable<EmitEvent> {
    if (evenType instanceof Array) {
      return this.subject$.pipe(
        filter((e: EmitEvent) => evenType.some(_eventType => e.name === _eventType))
      )
    } else {
      return this.subject$.pipe(
        filter((e: EmitEvent) => e.name === evenType)
      )
    }
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }

}
