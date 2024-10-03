import { makeAutoObservable } from "mobx";

class CounterMobx {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
    console.log(this.count);
  }
  decrement() {
    this.count = this.count - 1;
    console.log(this.count);
  }
}

const counterMobx = new CounterMobx();
export default counterMobx;
