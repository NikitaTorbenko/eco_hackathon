import './styles/index.css'

import { Layout } from 'widgets/index'
import { Routing } from './providers/routing'

export const App = () => {
    return(
        <div className='app'>
            <Layout className='container'>
                <Routing/>
            </Layout>
        </div>
    )
}