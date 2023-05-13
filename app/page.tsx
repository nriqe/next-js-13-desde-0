import { Navigator } from '@/components'
import { Routes } from '@/models'
import Image from 'next/image'
import Mustachy from '../public/images/mustachy.jpg'
import { mustachyBlur } from './models'
import Script from 'next/script';
import { Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'

//const Card = lazy(() => import("../components/Card/Card"));
//const Card = dynamic(() => import("../components/Card/Card"), {ssr: false})

function App() {
    return (
        <Suspense fallback={<div>CARGANDO</div> }>
            <Script 
                dangerouslySetInnerHTML={{
                    __html: `
                        document.body.style.backgroundColor = "#f0f0f0"
                    `
            }}
            />
            <div style={{ position: 'relative' }}>
                <h1>Welcome to Rick and Morty app</h1>
                <h2>What do you want ot see?</h2>
                <Navigator pathnames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
                <Image 
                    alt="Mustachy"
                    blurDataURL={mustachyBlur}
                    src={Mustachy}
                    placeholder="blur" 
                    priority 
                />
            </div>
        </Suspense>
    )
}

export default App