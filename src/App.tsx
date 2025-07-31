import { useState } from 'react';

import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>
        Bacon ipsum dolor amet picanha prosciutto doner pig sausage capicola,
        buffalo ribeye pork chop pastrami andouille meatball boudin filet mignon
        chislic. Pork loin bresaola prosciutto andouille. Porchetta cow
        landjaeger shankle. Pig tri-tip leberkas, frankfurter pastrami fatback
        bacon pork meatloaf tenderloin rump shoulder venison. Pork chop
        frankfurter short loin landjaeger prosciutto, andouille brisket t-bone
        tongue tri-tip bresaola jerky beef ribs cupim. Strip steak ball tip
        buffalo flank alcatra, cupim beef ribs prosciutto pork ham hock. Chuck
        landjaeger filet mignon spare ribs buffalo.
      </p>
    </>
  );
}

export default App;
