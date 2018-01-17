import { observable, action } from "mobx";

export default class CounterStore {
  @observable count = 0;

  @action.bound
  increment() {
    this.count += 1;
  }
}
