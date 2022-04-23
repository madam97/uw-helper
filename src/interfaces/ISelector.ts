interface ISelector {
  /** Query selector for selecting elements that can be focused */
  readonly querySelector: string;
  /** Tag names of the elements that can be focused */
  readonly tagNames: string[];

  /**
   * Returns true if the element is focusable after pressing the given key
   * @param {Element} element
   * @returns {boolean} 
   */
  checkElement: (element: Element) => boolean;
}

export default ISelector;