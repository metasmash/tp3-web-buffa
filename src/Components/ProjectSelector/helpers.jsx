import TicTacToe from '../Projects/TicTacToe/TicTacToe'
import React from 'react'
import { ChooseProject, MyHobbies } from '../index'

export const renderProject = (index) => {
    switch (index) {
        case 0:
            return <TicTacToe />
        case 1:
            return <MyHobbies />
        case 2:
            return <h1 style={{ textAlign: 'center' }}>Empty</h1>
        default:
            return <ChooseProject />
    }
}
