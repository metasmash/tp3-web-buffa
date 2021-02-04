import React, { useRef } from 'react'
import { rootUseRefApp } from './UseRefApp.css'
import { colors } from './constats'

// READ:
// This app is similar to var ref = document.querySelector({CSS_CURSOR})
// ref is considered as dom.
// You have an easy example of how useRef works here. It works the pretty same way!
// It is also a hook. So you can use it like a variable everywhere you want and pass it to a child component.

export default function UseRefApp() {
    const divRef = useRef()

    const handleMouseOver = () => {
        divRef.current.style.background = colors.gradientTwo
    }

    const handleMouseOut = () => {
        divRef.current.style.background = colors.gradientOne
    }

    return (
        <div
            ref={divRef}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={rootUseRefApp}
        />
    )
}
