import { getCharacters } from './services'
import { Card, Navigator } from '../../../components';
import { Routes } from '@/models';

async function fetchCharacters() {
    return await getCharacters();
}

async function Characters() {
    const characters = await fetchCharacters();
    return (
      <>
        <Navigator pathnames={[Routes.HOME, Routes.LOCATIONS]} />
        {characters.map(character => 
            <Card key={character.id} data={character} />
        )}    
      </>
    )
}

export default Characters;