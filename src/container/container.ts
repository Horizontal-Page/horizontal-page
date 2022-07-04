// main container of wrapper
import styles from "../style.css";
import sticky from "./sticky";

function container(wrapper: Element) {
  // declare parentelement first so the parent will not change after appending to sticky
  // initialize stickyElmeent
  const element = document.createElement("div");
  wrapper.replaceWith(element);
  const stickyElement = sticky(wrapper);

  element.classList.add(styles.container);
  element.appendChild(stickyElement);
}

export default container;
