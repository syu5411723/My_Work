import React, { VFC, useState, useEffect } from 'react'
import styled from "styled-components";
import { motion } from "framer-motion"
import "aos/dist/aos.css"

const Container = styled(motion.div)`
    
`
const NameInput = styled.input`
    display:block;

`
const MailInput = styled.input`
    display:block;


`
const MessateTextArea = styled.textarea`
    display:block;
`


const Contact: VFC = () => {

    return (
        <>
            <Container>
                <NameInput />
                <MailInput />
                <MessateTextArea />
            </Container>
        </>
    )
}

export default Contact
