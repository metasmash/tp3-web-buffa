import React, { useState } from 'react'
import _ from 'lodash'
import { rootMyHobbies } from './MyHobbies.css'
import { Input, Button } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { removeElementFromArray } from './helpers'
import { useLocalStorage } from '../../../Hooks'

export default function MyHobbies() {
    const [inputField, setInputField] = useState('')
    // useLocalStorage is a custom hook. See the hook folder, i've added the source code!

    const [hobbies, setHobbies] = useLocalStorage('hobbies', [])

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
    const deleteAllHobbies = () => setHobbies([])

    const renderNumberOfHobbies = (
        <div>{`Nombre de hobbies: ${_.size(hobbies)}`}</div>
    )

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
                <Button
                    style={{ backgroundColor: '#ff292980' }}
                    onClick={deleteAllHobbies}
                >
                    delete
                </Button>
            </div>
            <div
                style={{
                    height: 400,
                    maxWidth: '620px',
                    width: '100%',
                    margin: 'auto',
                }}
            >
                <DataGrid
                    columns={[
                        { field: 'hobbies', headerName: 'Hobbies', width: 400 },
                        {
                            field: 'id',
                            headerName: 'Delete',
                            width: 200,
                            renderCell: (params) => (
                                <Button
                                    style={{ backgroundColor: '#ff292980' }}
                                    onClick={() => deleteHobbies(params.value)}
                                >
                                    delete
                                </Button>
                            ),
                        },
                    ]}
                    rows={_.map(hobbies, (x, i) => ({
                        id: i,
                        hobbies: x,
                        delete: i,
                    }))}
                    pageSize={5}
                />
            </div>
        </div>
    )
}
