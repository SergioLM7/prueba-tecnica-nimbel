import { CharacterCard } from './components/CharacterCard'
import { CollectionList } from './components/CollectionList'
import { useCharacterGenerator } from './hooks/useCharacterGenerator'
import { useSaveCharacters } from './hooks/useSaveCharacters'
import './styles/_App.scss'

function App() {
  const {randomCharacter, getRandomCharacter} = useCharacterGenerator();
  const {charactersCollection, saveCharacter, deleteCharacter } = useSaveCharacters({randomCharacter});

  
  const handleClick = () => {
    getRandomCharacter();
  };

  return (
    <main className='main-container'>
      <h1>Prueba técnica Nimbel</h1>
      <button className='generator-button' onClick={handleClick}>Create character</button>
      {randomCharacter && <CharacterCard randomCharacter={randomCharacter} saveCharacter={saveCharacter}/>}
      <CollectionList charactersCollection={charactersCollection} deleteCharacter={deleteCharacter}/>
    </main>
  )
}

export default App
