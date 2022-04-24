import IHandlerFocus from '../interfaces/IHandlerFocus';
import IHandlerKeyPress from '../interfaces/IHandlerKeyPress';
import TDirection from '../types/TDirection';
import THotkey from '../types/THotkey';
import HandlerFocus from './HandlerFocus';

class HandlerKeyPress implements IHandlerKeyPress {
  direction: TDirection;
  handlerFocus: IHandlerFocus;

  constructor() {
    this.direction = 1,
    this.handlerFocus = new HandlerFocus();

    document.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyUp(e: KeyboardEvent): void {
    if (this.willIgnoreKeyPress()) {
      this.handlerFocus.blurFocusedElement();
      return;
    }

    switch (e.code) {
      // Moves focus
      case 'KeyH':
      case 'KeyL':
      case 'KeyM':
        e.preventDefault();

        const hotkey = e.code.replace(/key/i, '').toUpperCase() as THotkey;
        this.handlerFocus.move(hotkey, this.direction);
        break;

      // Removes focus
      case 'Tab':
        this.handlerFocus.moveToActiveElement();
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

export default HandlerKeyPress;