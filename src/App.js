import React from 'react'
import { GithubButton, ProjectSelector } from './Components'

function App() {
    return (
        <div className="App">
            <GithubButton />
            <ProjectSelector Projects={'test'} />
        </div>
    )
}

export default App
