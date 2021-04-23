import React, {VFC, useEffect} from 'react'
import styled from "styled-components";
import Aos from "aos"

import { HeadContainer } from "../Layout/Layout"

const HeadTitle = styled.h1`
`

const AboutHead:VFC = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <>
            <HeadContainer data-aos="fade-down">
                <HeadTitle>About</HeadTitle>
            </HeadContainer>
        </>
    )
}

export default AboutHead
