import React, { useState } from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { buttonStyle, bigTextSize } from './css'

const Button = ({ playerTurn }) => {
    const [symbol, setSymbol] = useState('')

    const handleClick = () => {
        if (symbol === '') {
            setSymbol(playerTurn === 1 ? 'X' : 'O')
        } else {
            console.log('This had already been played.')
        }
    }

    return (
        <>
            <MuiButton onClick={handleClick} style={buttonStyle}>
                <div style={bigTextSize}> {symbol} </div>
            </MuiButton>
        </>
    )
}

export default Button
