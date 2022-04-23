import IFocusHandler from '../interfaces/IFocusHandler';
import ISelector from '../interfaces/ISelector';
import TDirection from '../types/TDirection';
import THotkey from '../types/THotkey';
import SelectorHeading from './SelectorHeading';
import SelectorLandmark from './SelectorLandmark';
import SelectorLink from './SelectorLink';

class FocusHandler implements IFocusHandler {
  readonly selectors: Record<THotkey, ISelector>;
  readonly querySelector: string;
  focusedElement: Element | null;
  elements: NodeListOf<Element>;

  constructor() {
    this.selectors = {
      'H': new SelectorHeading(),
      'L': new SelectorLink(),
      'M': new SelectorLandmark()
    }

    this.querySelector = '';
    for (const selector of Object.values(this.selectors)) {
      if (this.querySelector !== '') {
        this.querySelector += ',';
      }

      this.querySelector += selector.querySelector;
    }

    this.focusedElement = null;
    this.elements = document.querySelectorAll(this.querySelector);

    window.addEventListener('focus', this.handleFocus.bind(this), true);
  }

  handleFocus(): void {
    if (document.activeElement) {
      for (const selector of Object.values(this.selectors)) {
        if (selector.checkElement(document.activeElement)) {
          this.changeFocusedElement(document.activeElement, false);
          break;
        }
      }
    }
  }

  move(hotkey: THotkey, direction: TDirection): void {
    let newFocusedElement: Element | null = null;

    let firstElement: Element | null = null;
    let passedFocusedElement: boolean = false;

    let from: number;
    let to: number;
    if (direction === 1) {
      from = 0;
      to = this.elements.length;
    } else {
      from = this.elements.length - 1;
      to = -1;
    }

    for (let i = from; i != to; i += direction) {
      const element = this.elements[i];

      // Get the first element that can be active
      if (firstElement === null && this.selectors[hotkey].checkElement(element)) {
        firstElement = element;

        // If there is no active element, will return the found first element
        if (this.focusedElement === null) {
          break;
        }
      }

      // Do not check elements till active element has been passed
      if (this.focusedElement === element) {
        passedFocusedElement = true;
      } else if (passedFocusedElement && this.selectors[hotkey].checkElement(element)) {
        newFocusedElement = element;
        break;
      }
    }

    this.changeFocusedElement(newFocusedElement ?? firstElement);
  }

  changeFocusedElement(newFocusedElement: Element | null, willFocus: boolean = true): void {
    if (this.focusedElement !== null) {
      this.focusedElement.classList.remove('uw-helper-focused');
    }
    if (newFocusedElement !== null) {
      newFocusedElement.classList.add('uw-helper-focused');

      if (willFocus) {
        (newFocusedElement as HTMLElement).focus();
      }
    }

    this.focusedElement = newFocusedElement;

    console.log(this.focusedElement);
  }
}

export default FocusHandler;