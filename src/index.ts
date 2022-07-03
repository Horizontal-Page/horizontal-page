import styles from "./style.css";

class HorizontalScroll {
  scrollY: number;

  constructor() {
    this.scrollY = window.scrollY;
  }
  init() {}
}
const init = new HorizontalScroll();

console.log(init);
