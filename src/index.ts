import KeyPressHandler from './handlers/KeyPressHandler';
import './style.css';

const start = () => {
  console.log('Starting UW Helper...');
  const keyPressHandler = new KeyPressHandler();
}

export { start };