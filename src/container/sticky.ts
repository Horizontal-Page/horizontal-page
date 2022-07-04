import styles from "../style.css";

function sticky(wrapper: Element) {
  const tag = "div";
  const element = document.createElement(tag);
  element.classList.add(styles.sticky);
  element.appendChild(wrapper);
  return element;
}

export default sticky;
