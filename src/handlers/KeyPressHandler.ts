import IFocusHandler from '../interfaces/IFocusHandler';
import IKeyPressHandler from '../interfaces/IKeyPressHandler';
import TDirection from '../types/TDirection';
import THotkey from '../types/THotkey';
import FocusHandler from './FocusHandler';

class KeyPressHandler implements IKeyPressHandler {
  direction: TDirection;
  focusHandler: IFocusHandler;

  constructor() {
    this.direction = 1,
    this.focusHandler = new FocusHandler();

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  /**
   * After a key was pressed moves the focus up/down or changes the direction of the focus movement
   * @param {KeyboardEvent} e 
   */
  handleKeyDown(e: KeyboardEvent): void {
    if (this.willIgnoreKeyPress()) {
      return;
    }

    switch (e.code) {
      // Moves focus
      case 'KeyH':
      case 'KeyL':
      case 'KeyM':
        const hotkey = e.code.replace(/key/i, '').toUpperCase() as THotkey;
        this.focusHandler.move(hotkey, this.direction);
        break;
      
      // Changes the direction of the focus movement
      case 'ArrowUp':
        this.setDirection(-1);
        break;
      case 'ArrowDown':
        this.setDirection(1);
        break;
    }
  }

  /**
   * Returns true if the active element is an input or textarea
   * @returns {boolean}
   */
  willIgnoreKeyPress(): boolean {
    return document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA';
  }

  /**
   * Changes the direction of the focus movement
   * @param {TDirection} direction
   */
  setDirection(direction: TDirection): void {
    this.direction = direction;
  }
}

export default KeyPressHandler;