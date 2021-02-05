import React, { useEffect, useState } from 'react'
import { initialState } from './constants'
import { Square } from '../../index'
import { Button as MuiButton } from '@material-ui/core'
import {
    rootTicTacToe,
    resetGameButton,
    titleDescription,
} from './TicTacToe.css'
import PhubSound from '../../../SoundFiles/pornhub-community-intro.mp3'
import HurtSound from '../../../SoundFiles/classic_hurt.mp3'
import { addElementFromArray, calculateWinner } from './helpers'

const TicTacToe = () => {
    const [playerTurn, setPlayerTurn] = useState(1)
    const [toggleResetGame, setToggleResetGame] = useState(false)
    const [playerMoves, setPlayerMoves] = useState(initialState)
    const [winner, setWinner] = useState(null)

    // setup audio
    const audio = { phub: new Audio(PhubSound), hurt: new Audio(HurtSound) }

    audio.phub.volume = 0.4
    audio.hurt.volume = 0.4

    // setup callback that will be passed inside child component
    const callback = (symbol, index) => {
        setPlayerTurn(symbol === 'X' ? 2 : 1)
        setPlayerMoves(addElementFromArray(playerMoves, index, playerTurn))
    }

    const resetGame = async () => {
        setToggleResetGame(!toggleResetGame)
        setWinner(null)
        setPlayerMoves(initialState)
        setPlayerTurn(1)
        await audio.phub.play()
    }

    useEffect(() => {
        setWinner(calculateWinner(playerMoves))
    }, [playerMoves])

    useEffect(() => {
        const checkup = async () => {
            if (!!winner) {
                await audio.hurt.play()
                alert(`Winner is: ${winner}`)
            }
        }

        checkup()
    }, [winner])

    return (
        <div style={rootTicTacToe}>
            <MuiButton
                color={'primary'}
                onClick={resetGame}
                style={resetGameButton}
            >
                reset game
            </MuiButton>
            <div style={titleDescription}>
                <h1 style={{ margin: 'auto' }}>Tic Tac Toe</h1>
                <h2>Player turn: {playerTurn === 1 ? 'X' : 'O'}</h2>
            </div>
            {initialState.map((x, i) => (
                <Square
                    playerTurn={playerTurn}
                    parentCallback={callback}
                    toggleResetGame={toggleResetGame}
                    index={i}
                    key={i}
                    winner={winner}
                />
            ))}
        </div>
    )
}

export default TicTacToe
