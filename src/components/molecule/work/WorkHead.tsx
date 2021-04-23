import React, {VFC, useEffect} from 'react'
import Aos from "aos";

import { HeadContainer } from "../Layout/Layout"





const WorkHead:VFC = () => {
    useEffect(() =>{
        Aos.init({});
    })
    return (
        <>
            <HeadContainer data-aos="fade-down">
                <h1>Works</h1>
            </HeadContainer>
            
        </>
    )
}

export default WorkHead
