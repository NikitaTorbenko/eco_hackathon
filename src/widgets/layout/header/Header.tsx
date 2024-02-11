import style from "./Header.module.scss"
import { memo, useCallback, useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import classNames from "classnames";
import { Button } from "@chakra-ui/react";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { removeAuthData } from "entities/auth";
import { useNavigate } from "react-router-dom";
import { pathRoutes } from "shared/config/route-path";

interface IHeaderProps {
    className?: string
}

export const Header: React.FC<IHeaderProps> = memo((props) => {
    const {
        className
    } = props

    const [isShowNavbar, setShowNavbar] = useState(true)
    const dispatch = useAppDispatch()
    const token = useAppSelector(state => state.authReducer.token)
    const navigate = useNavigate()

    const resizeInnerWidthHandle = useCallback(() => {
        window.innerWidth < 700 ? setShowNavbar(false) : setShowNavbar(true)
    }, [])

    const toggleAuthHandle = useCallback(() => {
        if(token)
            dispatch(removeAuthData())
        else
            navigate(pathRoutes.login.path)
    }, [token])

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    
        return () => {
          window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    return(
        <div className={classNames(style.header, className)}>
            <h1>ECO-Hackaton</h1>
            {isShowNavbar &&
                <Navbar width="400px" className={style.navbar}/>}
            <Button onClick={toggleAuthHandle} colorScheme="green">
                {token ? 'Выйти' : 'Войти'}
            </Button>
        </div>
    )
})