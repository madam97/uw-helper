import TDirection from '../types/TDirection';
import THotkey from '../types/THotkey';
import ISelector from './ISelector';

interface IHandlerFocus {
  /** The ojects that decides the next focused element based on the pressed key */
  readonly selectors: Record<THotkey, ISelector>,

  /** Query selector for selecting all the elements that can be focused */
  readonly querySelector: string,

  /** The current focused element */
  focusedElement: Element | null,

  /** Elements that can be focused */
  elements: NodeListOf<Element>,

  /**
   * Chooses the next focused element that is before or after the current focused element
   * @param {THotkey} hotkey
   * @param {TDirection} direction
   */
  move: (hotkey: THotkey, direction: TDirection) => void,

  /**
   * Moves the focus to the active element if it can be focused, or removes the focus class from the current focused element
   */
  moveToActiveElement(): void,

  /**
   * Changes the current focused element and sets the CSS class
   * @param {Element | null} newFocusedElement
   * @param {boolean} [willFocus] If true, will trigger focus event on the new focused element
   */
  changeFocusedElement: (newFocusedElement: Element | null, willFocus?: boolean) => void,

  /**
   * Removes the focus CSS class from the current focused element and sets the element to be null
   */
  blurFocusedElement: () => void
}

export default IHandlerFocus;