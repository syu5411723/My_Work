import React, {VFC, useEffect} from 'react'
import styled from "styled-components";
import Aos from "aos";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height: 180px;
    padding: 0 4vw;
`
const Text = styled.p`

`


const AboutText = () => {
    useEffect(() => {
        Aos.init({});
    },[])
    return (
        <Container>
            <Text data-aos="fade-right">Xxxxx Ashley</Text>
            <Text data-aos="fade-right">2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan</Text>
            <Text data-aos="fade-right">プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
        </Container>
    )
}

export default AboutText
