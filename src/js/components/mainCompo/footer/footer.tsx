import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";
import StateType from "../../../redux/stateType";
import { MainPage } from "../../../styles/container";
const { FooterCompo } = MainPage;

import { replaceText } from "../../../fileSystem/regExp";

const TextBox = styled.div`
    width: 50%;
    height: 100%;
    font-weight: 300;
`;

const Footer = () =>{
    const dummy = useSelector((state:StateType)=>state.dummyText);
    const replace = useSelector((state:StateType)=>state.replace);
    const regExp = useSelector((state:StateType)=>state.regExp);
    const options = useSelector((state:StateType)=>state.regExpOptions);
    return(
        <FooterCompo>
            <TextBox>
                {dummy}
            </TextBox>
            <TextBox >
                {replaceText(dummy,regExp,replace,options.ignore,options.global)}
            </TextBox>
        </FooterCompo>
    )
}

export default Footer;