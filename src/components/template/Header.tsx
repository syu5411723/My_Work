import React, {VFC} from 'react'
import styled from "styled-components";
import HeaderLogo from '../molecule/HeaderLogo';

import HeaderNav from '../molecule/HeaderNav'

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    width:92%;
    margin:0 auto;
    padding:90px 0 110px 0;
`

const Header:VFC = () => {
    return (
        <Container>
            <HeaderLogo />
            <HeaderNav />
        </Container>
    )
}

export default Header
