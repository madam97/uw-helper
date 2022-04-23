import IFocusHandler from './IFocusHandler';
import TDirection from '../types/TDirection';

interface IKeyPressHandler {
  direction: TDirection,
  focusHandler: IFocusHandler,

  constructor: Function,
  handleKeyDown: (e: KeyboardEvent) => void,
  willIgnoreKeyPress: () => boolean,
  setDirection: (direction: TDirection) => void
}

export default IKeyPressHandler;