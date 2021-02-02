import React, { useEffect, useState } from 'react'
import { Button as MuiButton } from '@material-ui/core'

// j'importe mes objets javascript depuis CSS pour appliquer du style à mes composants.

import { buttonStyle, bigTextSize } from './css'
const Button = ({ playerTurn, parentCallback }) => {
    const [symbol, setSymbol] = useState('')

    const handleClick = () => {
        if (symbol === '') {
            setSymbol(playerTurn === 1 ? 'X' : 'O')
        } else {
            alert('Already played. Choose another button stupid shit!')
        }
    }

    useEffect(() => {
        parentCallback(symbol)
    }, [symbol])

    return (
        <>
            <MuiButton onClick={handleClick} style={buttonStyle}>
                {/*ici j'ai style={bigTextSize}. Cela permet d'appliquer le style défini dans css.js*/}
                {/*pour commenter des lignes dans du JSX, comme ici, j'utilise les acolades et les backslash avec étoiles.*/}
                <div style={bigTextSize}> {symbol} </div>
            </MuiButton>
        </>
    )
}

export default Button
