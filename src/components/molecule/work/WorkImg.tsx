import React, {VFC, useEffect} from 'react'
import styled from "styled-components";
import Aos from "aos"
import { WorkImgData } from "./WorkImgDate"
import {motion} from "framer-motion"

const ImgContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    padding: 30px;
`
const ItemImg = styled(motion.img)`
    width:31%;
    height:auto;
    padding-bottom: 30px;
`

const itemV = {
    hover: {
        scale:1.1,
        transition:{type: "spring", stiffness: 2000, },
    },
}

const WorkImg:VFC = () => {
    useEffect(() => {
        Aos.init({});
    })
    return (
        <>
            <ImgContainer>
                {WorkImgData.map((data) => (
                    <ItemImg src={data.name}  alt="works"
                    variants={itemV}
                    whileHover="hover"
                    data-aos="fade-up"
                    // data-aos-delay="0"/
                    />
                ))}
            </ImgContainer>
        </>
    )
}

export default WorkImg
