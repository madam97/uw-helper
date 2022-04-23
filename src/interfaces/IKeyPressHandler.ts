import TDirection from '../types/TDirection';

interface IKeyPressHandler {
  direction: TDirection,

  constructor: Function,
  handleKeyDown: (e: KeyboardEvent) => void,
  setDirection: (direction: TDirection) => void
}

export default IKeyPressHandler;