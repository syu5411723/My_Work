import React, {VFC} from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"

import { NavData } from "./NavData"
import InstagramImg from "../../images/icon-instagram.png"
const NavContainer = styled(motion.div)`
    
`
const NavList = styled.ul`
    display:flex;

`
const Navitems = styled(motion.li)`
    padding:10px 15px;
    cursor: pointer;
`
const InstaLogo = styled(motion.img)`
    margin-left: 10px;
    margin-top: 10px;
    width:20px;
    height:20px;
    cursor: pointer;
    
`
const itemV ={
    hover:{
        scale:1.2,
        originX:0,
        textShadow:"0px 0px 2px rgb(0,0,0)",
        transition:{type:"spring", stiffness:1000},
    },
    tap:{
        scale:0.9,
    }
}

const instaV = {
    hidden: {
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{delay:1}
    },
    hover:{
        scale:1.2,
        originX:0,
        transition:{duration:0.1}
    }
}

const HeaderNav:VFC = () => {
    return (
        <>
            <NavContainer>
            <NavList>
                {NavData.map((data) =>(
                    <Navitems
                    variants={itemV}
                    whileHover="hover"
                    whileTap="tap"
                    >{data.name}</Navitems>
                ))}
                <InstaLogo src={InstagramImg} alt="instagram"
                variants={instaV}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                />
                
            </NavList>
            
        </NavContainer>
        </>
    )
}

export default HeaderNav
