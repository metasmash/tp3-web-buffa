import _ from 'lodash'
import { lines } from './constants'

export const addElementFromArray = (array, index, playerTurn) => [
    ..._.slice(array, 0, index),
    playerTurn === 1 ? 'X' : 'O',
    ..._.slice(array, index + 1, _.size(array)),
]

export const calculateWinner = (squares) => {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}
