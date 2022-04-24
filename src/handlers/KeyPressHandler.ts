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

    document.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyUp(e: KeyboardEvent): void {
    if (this.willIgnoreKeyPress()) {
      this.focusHandler.blurFocusedElement();
      return;
    }

    switch (e.code) {
      // Moves focus
      case 'KeyH':
      case 'KeyL':
      case 'KeyM':
        e.preventDefault();

        const hotkey = e.code.replace(/key/i, '').toUpperCase() as THotkey;
        this.focusHandler.move(hotkey, this.direction);
        break;

      // Removes focus
      case 'Tab':
        this.focusHandler.moveToActiveElement();
        break;
      
      // Changes the direction of the focus movement
      case 'ArrowUp':
        e.preventDefault();

        this.setDirection(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();

        this.setDirection(1);
        break;
    }
  }

  willIgnoreKeyPress(): boolean {
    return document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA';
  }

  setDirection(direction: TDirection): void {
    this.direction = direction;
  }
}

export default KeyPressHandler;