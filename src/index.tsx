import { render } from 'react-dom';
import { Root } from '@/components/Root';
import './index.less';



function App() {
  return <Root />;
}

render(<App />, document.getElementById('root'));