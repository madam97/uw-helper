import ISelector from '../interfaces/ISelector';

class SelectorLink implements ISelector {
  readonly querySelector: string = 'a';

  checkElement(element: Element): boolean {
    return ['A'].includes(element.tagName);
  }
}

export default SelectorLink;