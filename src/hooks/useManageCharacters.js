import { useState, useEffect } from "react";

export const useManageCharacters = ({ randomCharacter }) => {
  const [charactersCollection, setCharacterCollection] = useState(() => {
    const localStorageCollection = localStorage.getItem('collection');
    return localStorageCollection ? JSON.parse(localStorageCollection) : [];
});

  const saveCharacter = () => {
    const collection = [...charactersCollection];

    const checkNewCharacter = collection.find(element => element.id === randomCharacter.id);
    if (checkNewCharacter) return;

    const newCollection = [...collection, randomCharacter]
    setCharacterCollection(newCollection);

  };

  const deleteCharacter = (characterID) => {
    const modifiedCollection = charactersCollection.filter(element => element.id !== characterID);

    setCharacterCollection(modifiedCollection);
  }

  const editCharacter = (updatedCharacter) => {
    const modifiedCollection = charactersCollection.map(character => 
        character.id === updatedCharacter.id ? updatedCharacter : character
    );
    setCharacterCollection(modifiedCollection);
};


  useEffect(() => {
    localStorage.setItem('collection', JSON.stringify(charactersCollection));
  }, [charactersCollection]);


  return { charactersCollection, saveCharacter, deleteCharacter, editCharacter };

};
