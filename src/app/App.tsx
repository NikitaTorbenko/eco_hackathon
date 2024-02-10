import './styles/index.css'
import { Routing } from './providers/routing'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useEffect } from 'react'
import { initAuthData } from 'entities/auth'

export const App = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    return(
        <div className='app'>
            <Routing/>
        </div>
    )
}