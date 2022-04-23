import TDirection from '../types/TDirection';
import THotkey from '../types/THotkey';
import ISelector from './ISelector';

interface IFocusHandler {
  readonly selectors: Record<THotkey, ISelector>,
  readonly querySelector: string,
  focusedElement: Element | null,
  elements: NodeListOf<Element>,

  move: (hotkey: THotkey, direction: TDirection) => void
}

export default IFocusHandler;