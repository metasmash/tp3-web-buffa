import React, { useEffect, useState } from 'react'
import { Button as MuiButton } from '@material-ui/core'

// j'importe mes objets javascript depuis CSS pour appliquer du style à mes composants.

import { buttonStyle, bigTextSize } from './Square.css'
const Button = ({ playerTurn, parentCallback, toggleResetGame }) => {
    const [symbol, setSymbol] = useState('')

    const handleClick = () => {
        if (symbol === '') {
            setSymbol(playerTurn === 1 ? 'X' : 'O')
        } else {
            alert('Already played.')
        }
    }

    useEffect(() => {
        parentCallback(symbol)
    }, [symbol])

    useEffect(() => {
        setSymbol('')
    }, [toggleResetGame])

    return (
        <>
            <MuiButton onClick={handleClick} style={buttonStyle}>
                {/*ici j'ai style={bigTextSize}. Cela permet d'appliquer le style défini dans TicTacToe.Square.GithubButton.css.js*/}
                {/*pour commenter des lignes dans du JSX, comme ici, j'utilise les accolades et les backslash avec étoiles.*/}
                <div style={bigTextSize}> {symbol} </div>
            </MuiButton>
        </>
    )
}

export default Button
