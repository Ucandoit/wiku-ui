/**
 * Transit a div element's height from auto to a target height.
 * @param {HTMLDivElement} el the div element
 * @param {number} endHeight the target height
 */
export const transitionFromAuto = (el: HTMLDivElement, endHeight: number): void => {
  el.style.height = getComputedStyle(el).height;
  // Force repaint
  el.offsetHeight;
  el.style.height = endHeight + 'px';
};

/**
 * Transit a div element's height to auto.
 * @param {HTMLDivElement} el the div element
 */
export const transitionToAuto = (el: HTMLDivElement): void => {
  const prevHeight = el.style.height;
  el.style.height = 'auto';
  const endHeight = getComputedStyle(el).height;
  el.style.height = prevHeight;
  // Force repaint
  el.offsetHeight;
  el.style.height = endHeight;
};

/**
 * Check whether a html element is Clicked.
 * @param {MouseEvent} event the click event
 * @param {HTMLElement} element the html element
 */
export const isClicked = (event: MouseEvent, element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const minX = rect.left + element.clientLeft;
  const x = event.clientX;
  const minY = rect.top + element.clientTop;
  const y = event.clientY;
  if (x < minX || x >= minX + element.clientWidth) {
    return false;
  }
  if (y < minY || y >= minY + element.clientHeight) {
    return false;
  }
  return true;
};
