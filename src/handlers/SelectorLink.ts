import ISelector from '../interfaces/ISelector';

class SelectorLink implements ISelector {
  readonly querySelector: string = 'a';
  readonly tagNames: string[] = ['a'];

  checkElement(element: Element): boolean {
    return this.tagNames.includes( element.tagName.toLowerCase() );
  }
}

export default SelectorLink;