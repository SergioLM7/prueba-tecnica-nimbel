import { useState, useEffect } from "react";

export const useSaveCharacters = ({ randomCharacter }) => {
    const [charactersCollection, setCharacterCollection] = useState(JSON.parse(localStorage.getItem('collection')));

    const saveCharacter = () => {
        const collection = [...charactersCollection];

        const checkNewCharacter = collection.find(element => element === randomCharacter);
        if (checkNewCharacter) return;

        const newCollection = [...collection, randomCharacter]
        setCharacterCollection(newCollection);

    };

    const deleteCharacter = (characterName) => {
        const modifiedCollection = charactersCollection.filter(element => element.name !== characterName);

        setCharacterCollection(modifiedCollection);
    }

    useEffect(() => {
        localStorage.setItem('collection', JSON.stringify(charactersCollection));
      }, [charactersCollection]);

    useEffect(() => {
        const localStorageCollection = JSON.parse(localStorage.getItem('collection'));
        setCharacterCollection(localStorageCollection);
      }, []);

    return { charactersCollection, saveCharacter, deleteCharacter };

};
