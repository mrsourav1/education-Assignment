import logo from './logo.svg';
import './App.css';

import { MathJaxContext } from 'better-react-mathjax';
import Sample from './components/Question';

const App= ()=> {

  return (
    <MathJaxContext>
      <Sample />
    </MathJaxContext>
  );
}

export default App;

