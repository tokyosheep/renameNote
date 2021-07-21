import * as React from "react";
import styled,{ createGlobalStyle } from "styled-components";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { ipcRenderer } from "electron";
import { preset_set } from "../redux/action/presetActions";

import MainCompo from "./mainPage";

import SidePresets from "../components/sidePresets/sidePresets";
import SettingsCompo from "./settings";

import { WatchingLayer } from "../components/parts/loading";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
        background: #fff;
    }
`;

const Layout = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        (async()=>{
            const presets = await ipcRenderer.invoke("sendData");
            console.log(presets);
            dispatch(preset_set(presets));
        })();
    },[]);
    return(
        <>
            <GlobalStyle />
            <WatchingLayer />
            <SidePresets />
            <SettingsCompo />
            <MainCompo />
        </>
    )
}

export default Layout;