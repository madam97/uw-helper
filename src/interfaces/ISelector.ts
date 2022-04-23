interface ISelector {
  readonly querySelector: string;
  readonly tagNames: string[];

  checkElement: (element: Element) => boolean;
}

export default ISelector;