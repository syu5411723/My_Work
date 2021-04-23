import React, {VFC} from 'react'
import styled from "styled-components"

import MainImg from "../../../images/mainvisual-pc.jpg"


const ThumbContainer = styled.div`
    background:url(${MainImg});
    background-position:center;
    background-size:cover;
    width: 100vw;
    height: 100vh;
`

const Thumb:VFC = () => {
    return (
        <>
            <ThumbContainer>
                
            </ThumbContainer>
        </>
    )
}

export default Thumb
