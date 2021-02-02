import React, { useState } from 'react'
import { initialState } from './constants'
import { Button } from '../../Components'
import { rootTicTacToe } from './css'

const TicTacToe = () => {
    const [playerTurn, setPlayerTurn] = useState(1)

    const callback = (symbol) => {
        setPlayerTurn(symbol === 'X' ? 2 : 1)
    }

    return (
        <div style={rootTicTacToe}>
            <h1 style={{ margin: 'auto' }}>Tic Tac Toe</h1>
            <h2>Player {playerTurn}, play omg!!!</h2>
            {initialState.map((x, key) => (
                <Button
                    playerTurn={playerTurn}
                    parentCallback={callback}
                    key={key}
                />
            ))}
        </div>
    )
}

export default TicTacToe
