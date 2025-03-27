import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private totalComponents = 0;
  private successfulRenders = 0;

  incrementTotal() {
    this.totalComponents++;
  }

  incrementSuccess() {
    this.successfulRenders++;
  }


  getTotal() {
    return this.totalComponents;
  }

  getSuccess() {
    return this.successfulRenders;
  }

  getFailure() {
    return this.totalComponents - this.successfulRenders;
  }

  getSuccessPercentage() {
    return this.totalComponents > 0 ? (this.successfulRenders / this.totalComponents) * 100 : 0;
  }
}
