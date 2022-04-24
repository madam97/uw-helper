import ISelector from '../interfaces/ISelector';

class SelectorHeading implements ISelector {
  readonly querySelector: string = 'h1,h2,h3,h4,h5,h6';
  readonly tagNames: string[] = ['h1','h2','h3','h4','h5','h6'];

  checkElement(element: Element): boolean {
    return this.tagNames.includes( element.tagName.toLowerCase() );
  }
}

export default SelectorHeading;