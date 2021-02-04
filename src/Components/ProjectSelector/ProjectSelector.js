import React, { useState } from 'react'
import _ from 'lodash'
import { Button, ButtonGroup } from '@material-ui/core'
import { rootProjectSelector } from './ProjectSelector.css'
import { projects } from './constats'
import { renderProject } from './helpers'

export default function ProjectSelector() {
    const [projectId, setProjectId] = useState(-1)

    const handleClick = (i) => {
        setProjectId(i)
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <div style={rootProjectSelector}>
                <ButtonGroup
                    size="large"
                    color="primary"
                    aria-label="large outlined primary button group"
                >
                    {_.map(projects, (x, i) => (
                        <Button key={i} onClick={() => handleClick(i)}>
                            {x}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
            {renderProject(projectId)}
        </div>
    )
}
