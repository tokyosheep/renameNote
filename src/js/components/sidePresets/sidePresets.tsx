import * as React from "react";
import styled from "styled-components";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";

import { PresetSideBar } from "../../styles/container";
const { Container , PresetList } = PresetSideBar;

import Header from "./header/header";
import PresetBox from "./PresetBox/presetBox";
import Footer from "./footer/footer";
import StateType from "../../redux/stateType";

const SidePresets = () =>{
    const presets = useSelector((state:StateType)=>state.presets);
    const mode = useSelector((state:StateType)=>state.windowMode);
    const presetList = presets.map((preset,index)=><PresetBox key={index} name={preset.name}></PresetBox>);
    return(
        <Container switchPlace={mode === "select"}>
            <Header />
            <PresetList>
                {presetList}
            </PresetList>
            <Footer />
        </Container>
    )
}

export default SidePresets;