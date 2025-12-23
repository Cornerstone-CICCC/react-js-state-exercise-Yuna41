import { useState } from 'react'
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  const [isLightsOn, setIsLightsOn] = useState<boolean>(false)
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([])
  const [counter, setCounter] = useState<number>(0)
  
  const handleToggleMode = () => {
    setIsLightsOn((current) => !current)
  }

  const handleLottoNum = () => {
    const numbers = Array.from({ length: 7 }, () => 
      Math.floor(Math.random() * 50) + 1
    )
    setLottoNumbers(numbers)
  }

  const handleIncrement = () => {
    setCounter((current) => current + 1)
  }
  
  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle onToggle={handleToggleMode}/>
      <div style={{
        backgroundColor: isLightsOn ? 'white' : 'black',
        color: isLightsOn ? 'black': 'white'
      }}>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onGenerate={handleLottoNum}/>
      <div className="output">Lotto Numbers: {lottoNumbers.join(', ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter onClick={handleIncrement}/>
      <div className="output">Count: {counter}</div>
    </div>
  );
};

export default App;