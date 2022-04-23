interface ISelector {
  readonly querySelector: string;

  checkElement: (element: Element) => boolean;
}

export default ISelector;