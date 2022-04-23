import TDirection from '../types/TDirection';
import THotkey from '../types/THotkey';
import ISelector from './ISelector';

interface IFocusHandler {
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
   * Changes the current focused element and sets the CSS class
   * @param {Element | null} newFocusedElement
   */
  changeFocusedElement: (newFocusedElement: Element | null) => void
}

export default IFocusHandler;