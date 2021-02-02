import React, { useState } from 'react'
import { initialState } from './constants'
import { Button } from '../../Components'
import { Button as MuiButton } from '@material-ui/core'
import { rootTicTacToe, resetGameButton, titleDescription } from './css'
import PhubSound from '../../SoundFiles/pornhub-community-intro.mp3'

const TicTacToe = () => {
    const [playerTurn, setPlayerTurn] = useState(1)
    const [toggleResetGame, setToggleResetGame] = useState(false)

    const audio = new Audio(PhubSound)

    const callback = (symbol) => {
        setPlayerTurn(symbol === 'X' ? 2 : 1)
    }

    const handleClick = () => {
        setToggleResetGame(!toggleResetGame)
        setPlayerTurn(1)
        audio.play().then((r) => r)
    }

    return (
        <div style={rootTicTacToe}>
            <MuiButton
                color={'primary'}
                onClick={handleClick}
                style={resetGameButton}
            >
                reset game
            </MuiButton>
            <div style={titleDescription}>
                <h1 style={{ margin: 'auto' }}>Tic Tac Toe</h1>
                <h2>Player {playerTurn}, play omg!!!</h2>
            </div>
            {initialState.map((x, key) => (
                <Button
                    playerTurn={playerTurn}
                    parentCallback={callback}
                    toggleResetGame={toggleResetGame}
                    key={key}
                />
            ))}
        </div>
    )
}

export default TicTacToe
