import React, { useState } from 'react'
import _ from 'lodash'
import { rootMyHobbies, useStyles } from './MyHobbies.css'
import { Input, Button } from '@material-ui/core'
import { removeElementFromArray } from './helpers'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function MyHobbies() {
    const [inputField, setInputField] = useState('')
    const [hobbies, setHobbies] = useState([])

    const addHobbies = () => {
        setHobbies([...hobbies, inputField])
        setInputField('')
    }

    const handleKeyPress = (x) => {
        if (x.key === 'Enter') {
            addHobbies()
        }
    }

    const deleteHobbies = (i) => setHobbies(removeElementFromArray(hobbies, i))

    const renderNumberOfHobbies = (
        <div>{`Nombre de hobbies: ${_.size(hobbies)}`}</div>
    )

    const classes = useStyles()

    return (
        <div style={rootMyHobbies}>
            My Hobbies
            {renderNumberOfHobbies}
            <div>
                <Input
                    value={inputField}
                    onChange={(e) => setInputField(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button onClick={addHobbies}>Add</Button>
            </div>
            <div>
                {_.map(hobbies, (x, i) => (
                    <List
                        component="nav"
                        className={classes.root}
                        aria-label="mailbox folders"
                    >
                        <ListItem button divider>
                            <ListItemText primary={x} />
                            <Button
                                style={{ backgroundColor: '#ff292980' }}
                                onClick={() => deleteHobbies(i)}
                            >
                                delete
                            </Button>
                        </ListItem>
                    </List>
                ))}
            </div>
        </div>
    )
}
