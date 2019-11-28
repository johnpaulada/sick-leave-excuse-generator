import React, {useState} from 'react';
import ExcuseGenerator from './ExcuseGenerator'
import Body from './components/Body'
import Button from './components/Button'
import Text from './components/Text'

function App() {
  const [excuse, setExcuse] = useState(ExcuseGenerator.generate('excuse'))

  const generateExcuse = () => {
    setExcuse(ExcuseGenerator.generate('excuse'))
  }

  return (
    <Body>
      <Text size="32px">{excuse}</Text>
      <Button onClick={generateExcuse}>Generate</Button>
    </Body>
  );
}

export default App;
