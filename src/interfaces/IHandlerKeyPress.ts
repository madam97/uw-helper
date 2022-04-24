import IHandlerFocus from './IHandlerFocus';
import TDirection from '../types/TDirection';

interface IHandlerKeyPress {
  /** Direction of the focus movement */
  direction: TDirection,

  /** The object that handles focusing on elements */
  handlerFocus: IHandlerFocus,

  /**
   * After a key was pressed moves the focus up/down or changes the direction of the focus movement
   * @param {KeyboardEvent} e 
   */
  handleKeyUp: (e: KeyboardEvent) => void,

  /**
   * Returns true if the active element is an input or textarea
   * @returns {boolean}
   */
  willIgnoreKeyPress: () => boolean,

  /**
   * Changes the direction of the focus movement
   * @param {TDirection} direction
   */
  setDirection: (direction: TDirection) => void
}

export default IHandlerKeyPress;