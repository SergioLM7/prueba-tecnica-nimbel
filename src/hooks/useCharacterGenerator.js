import { names, races, skills } from '../services/collections'
import { getRandomImage } from '../services/images';
import { useState } from "react";

export const useCharacterGenerator = () => {
    const [randomCharacter, setRandomCharacter] = useState();

    const getRandomCharacter = async () => {
        const randomAge = Math.floor(Math.random() * 300);
        const randomPositionNames = Math.floor(Math.random() * names.length);
        const randomPositionRaces = Math.floor(Math.random() * races.length);
        const randomPositionSkill = Math.floor(Math.random() * skills.length);
        let image;

        try {
            image = await getRandomImage();
        } catch (error) {
            console.error("Error fetching the random image: ", error);
            image = '../../public/default_image.jpg'; 
        }


        setRandomCharacter({
            name: names[randomPositionNames],
            age: randomAge,
            race: races[randomPositionRaces],
            skill: skills[randomPositionSkill],
            image: image,
        });

    }

    return { randomCharacter, getRandomCharacter };

}

