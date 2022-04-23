import IKeyPressHandler from '../interfaces/IKeyPressHandler';
import TDirection from '../types/TDirection';

class KeyPressHandler implements IKeyPressHandler {
  direction: TDirection;

  constructor() {
    this.direction = 1;

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  /**
   * After a key was pressed moves the focus up/down or changes the direction of the focus movement
   * @param {KeyboardEvent} e 
   */
  handleKeyDown(e: KeyboardEvent): void {
    switch (e.code) {
      // Changes the direction of the focus movement
      case 'ArrowUp':
        this.setDirection(1);
        break;
      case 'ArrowDown':
        this.setDirection(-1);
        break;
    }
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