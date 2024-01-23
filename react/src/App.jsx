import ChatL from './ChatL'
import WS from './WS'
import './App.css'
import { uniqueNamesGenerator, adjectives, names } from 'unique-names-generator'
const randomName = uniqueNamesGenerator({ dictionaries: [names] }); // big_red_donkey




function App()
{



  return (
    <div>
      <h1>Hey, {randomName}</h1>

      <WS name={randomName} />
      <h1> </h1>


    </div>
  )
}

export default App
