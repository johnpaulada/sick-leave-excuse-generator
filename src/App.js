import React, {useState} from 'react';
import ExcuseGenerator from './ExcuseGenerator'
import Body from './components/Body'
import Button from './components/Button'
import Text from './components/Text'
import MadeBy from './components/MadeBy'
import LinkOut from './components/LinkOut'

function App() {
  const [excuse, setExcuse] = useState(ExcuseGenerator.generate('excuse'))

  const generateExcuse = () => {
    setExcuse(ExcuseGenerator.generate('excuse'))
  }

  return (
    <Body>
      <Text size="32px">{excuse}</Text>
      <Button onClick={generateExcuse}>Generate</Button>
      <MadeBy>
          Made with  <span aria-label="Heart" role="img">♥️</span> by <LinkOut href="https://github.com/johnpaulada/thesis-title-generator">John Paul Ada</LinkOut>
        </MadeBy>
    </Body>
  );
}

export default App;
