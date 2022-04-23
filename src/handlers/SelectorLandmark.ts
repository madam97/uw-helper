import ISelector from '../interfaces/ISelector';

class SelectorLandmark implements ISelector {
  readonly querySelector: string = 'article,aside,details,figcaption,figure,footer,header,main,mark,nav,section,summary,time,[role]';
  readonly tagNames: string[] = ['article','aside','details','figcaption','figure','footer','header','main','mark','nav','section','summary','time'];

  checkElement(element: Element): boolean {
    return this.tagNames.includes( element.tagName.toLowerCase() ) || element.hasAttribute('role');
  }
}

export default SelectorLandmark;