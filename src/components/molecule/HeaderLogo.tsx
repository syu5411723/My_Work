import React, {VFC} from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
import Logo from "../../images/logo.svg"

const LogoImg = styled(motion.img)`
    
`
const imgV ={
    hidden: {
        opacity:0,
        y:-200,
    },
    visible: {
        opacity:1,
        y:0,
        transition:{type:"spring", stiffness:200, delay:0.4}
    }
}


const HeaderLogo:VFC = () => {
    return (
        <>
            <LogoImg src={Logo} alt="MU Work" 
            variants={imgV}
            initial="hidden"
            animate="visible"
            />
        </>
    )
}

export default HeaderLogo
