import styles from "./style.module.css";
import container from "./container/container";
import { scroll, resize } from "./eventListener";
const wrapper = document.querySelector(".wrapper") as HTMLElement;

class HorizontalScroll {
  element: Element;
  constructor(_element: Element) {
    this.element = _element;
  }
  public init() {
    this.appendWrapper();
    this.eventListener();
  }
  private eventListener() {
    addEventListener("scroll", scroll);
    addEventListener("resize", resize);
  }
  private appendWrapper() {
    container(this.element);
  }
}

const firstPage = new HorizontalScroll(wrapper);
firstPage.init();
