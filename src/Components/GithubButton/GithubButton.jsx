import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { githubButtonStyle } from './css'

const GithubButton = () => {
    return (
        <div>
            <MuiButton
                style={githubButtonStyle}
                variant="contained"
                color="primary"
                href="https://github.com/metasmash/tp3-web-buffa"
                target="_blank"
                rel="noreferrer"
            >
                Github repo
            </MuiButton>
        </div>
    )
}

export default GithubButton
