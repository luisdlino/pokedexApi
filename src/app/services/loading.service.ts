import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(true);

  public setLoad(load: boolean): void {
    this.loading.next(load);
  }

  public getLoad(): Observable<boolean> {
    return this.loading.asObservable();
  }

}
