import ISelector from '../interfaces/ISelector';

class SelectorLandmark implements ISelector {
  readonly querySelector: string = 'header,main,footer,section,aside,nav,form,[role]';

  checkElement(element: Element): boolean {
    return ['HEADER', 'MAIN', 'FOOTER', 'SECTION', 'ASIDE', 'NAV', 'FORM'].includes(element.tagName);
  }
}

export default SelectorLandmark;