import IHandlerFocus from '../interfaces/IHandlerFocus';
import ISelector from '../interfaces/ISelector';
import TDirection from '../types/TDirection';
import THotkey from '../types/THotkey';
import SelectorHeading from '../selectors/SelectorHeading';
import SelectorLandmark from '../selectors/SelectorLandmark';
import SelectorLink from '../selectors/SelectorLink';

class HandlerFocus implements IHandlerFocus {
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

    window.addEventListener('blur', this.blurFocusedElement.bind(this), true);
  }

  moveToActiveElement(): void {
    let element: Element | null = null;

    if (document.activeElement) {
      for (const selector of Object.values(this.selectors)) {
        if (selector.checkElement(document.activeElement)) {
          element = document.activeElement;
          break;
        }
      }
    }

    this.changeFocusedElement(element, false);
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
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }

    this.blurFocusedElement();

    if (newFocusedElement !== null) {
      newFocusedElement.classList.add('uw-helper-focused');

      if (willFocus) {
        (newFocusedElement as HTMLElement).focus();
        newFocusedElement.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'center'
        });
      }
    }

    this.focusedElement = newFocusedElement;
  }

  blurFocusedElement(): void {
    if (this.focusedElement !== null) {
      this.focusedElement.classList.remove('uw-helper-focused');
      this.focusedElement = null;
    }
  }
}

export default HandlerFocus;