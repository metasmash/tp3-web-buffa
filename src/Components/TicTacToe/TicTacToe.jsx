import React, { useState } from 'react'
import { initialState } from './constants'
import { Button } from '../../Components'
import { rootTicTacToe } from './css'

const TicTacToe = () => {
    const [playerTurn, setPlayerTurn] = useState('1')

    return (
        <div style={rootTicTacToe}>
            <h1 style={{ margin: 'auto' }}>Tic Tac Toe</h1>
            {initialState.map((x, key) => (
                <Button playerTurn={playerTurn} key={key} />
            ))}
        </div>
    )
}

export default TicTacToe