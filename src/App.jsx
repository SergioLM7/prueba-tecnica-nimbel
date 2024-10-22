import { CharacterCard } from './components/CharacterCard'
import { CollectionList } from './components/CollectionList'
import { useCharacterGenerator } from './hooks/useCharacterGenerator'
import { useManageCharacters } from './hooks/useManageCharacters'
import './styles/_App.scss'

function App() {
  const {randomCharacter, getRandomCharacter} = useCharacterGenerator();
  const {charactersCollection, saveCharacter, deleteCharacter, editCharacter } = useManageCharacters({randomCharacter});

  
  const handleClick = () => {
    getRandomCharacter();
  };

  return (
    <main className='main-container'>
      <h1>Prueba técnica Nimbel</h1>
      <button className='generator-button' onClick={handleClick}>Create random character</button>
      {randomCharacter && <CharacterCard randomCharacter={randomCharacter} saveCharacter={saveCharacter}/>}
      <CollectionList randomCharacter={randomCharacter} charactersCollection={charactersCollection} deleteCharacter={deleteCharacter} editCharacter={editCharacter}/>
    </main>
  )
}

export default App
