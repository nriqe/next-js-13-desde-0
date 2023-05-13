import { Routes } from '@/models';
import { Card, Navigator } from '../../../components';
import { getLocations } from './services'

async function fetchLocations() {
    return await getLocations();
}

async function Locations() {
    const locations = await fetchLocations();
    return (
        <>
            <Navigator pathnames={[Routes.HOME, Routes.CHARACTERS]} />
            {locations.map(location => 
                <Card key={location.id} data={location} />
            )}    
        </>
    )
}

export default Locations;