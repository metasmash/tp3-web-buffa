import TicTacToe from '../Projects/TicTacToe/TicTacToe'
import React from 'react'
import { ChooseProject, MyHobbies, UseRefApp } from '../index'

export const renderProject = (index) => {
    switch (index) {
        case 0:
            return <TicTacToe />
        case 1:
            return <MyHobbies />
        case 2:
            return <UseRefApp />
        default:
            return <ChooseProject />
    }
}
