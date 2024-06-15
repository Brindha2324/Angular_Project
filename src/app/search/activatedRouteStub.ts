import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export class ActivatedRouteStub {
  // Use BehaviorSubject to provide dynamic changes to queryParams
  private queryParamsSubject = new BehaviorSubject<any>({});
  queryParams = this.queryParamsSubject.asObservable();

  // Method to update the queryParams value
  setQueryParams(params: any) {
    this.queryParamsSubject.next(params);
  }
}
