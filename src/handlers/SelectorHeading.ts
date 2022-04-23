import ISelector from '../interfaces/ISelector';

class SelectorHeading implements ISelector {
  readonly querySelector: string = 'h1,h2,h3,h4,h5,h6';

  checkElement(element: Element): boolean {
    return ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(element.tagName);
  }
}

export default SelectorHeading;