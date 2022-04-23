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

    this.focusedElement = newFocusedElement !== null ? newFocusedElement : firstElement;

    console.log(this.focusedElement);
  }
}

export default FocusHandler;