import * as React from "react";
import { useSelector } from "react-redux";

import { SettingCompo } from "../styles/container";
const { Container } = SettingCompo;

import Header from "../components/setting/header/header";
import SettingMainOptions from "../components/setting/main/mainOptions";
import AsidePresets from "../components/setting/aside/asidePresets";
import Footer from "../components/setting/footer/footer";
import StateType from "../redux/stateType";

const SettingsCompo = () =>{
    const mode = useSelector((state:StateType)=>state.windowMode);
    return(
        <Container switchOn={mode==="create"}>
            <Header />
            <SettingMainOptions />
            <AsidePresets />
            <Footer />
        </Container>
    )
}

export default SettingsCompo;