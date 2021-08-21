import styled from "styled-components";

export const containerSize = {
    width:800,
    height:500
};

export const MainPage = {
    Container:styled.div`
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 150px  650px;
        grid-template-rows: 290px 180px 30px;
        grid-template-areas: 
            "main main"
            "nav aside" 
            "footer footer"
        ;
        position: relative;
        z-index: 1;
    `,
    MainCompo:styled.main`
        grid-area: main;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        position: relative;
    `,
    NavCompo:styled.nav`
        grid-area: nav;
    `,
    SideCompo:styled.aside`
        grid-area: aside;
        & > div{
            padding: 5px;
            box-sizing: border-box;
        }
    `,
    FooterCompo:styled.footer`
        grid-area: footer;
        display: flex;
        justify-content: flex-start;
        border-top: 1px solid #222;
    `
}

export const PresetSideBar = {
    Container:styled.div<{switchPlace:boolean}>`
    width:315px;
    height:100%;
    position: fixed;
    color: #0b0b0b;
    background: #101010;
    top: 0;
    left: ${props=>props.switchPlace ? 0 : -315 }px;
    transition: left .3s linear;
    z-index: 20;
    `,
    PresetList:styled.ul`
    height: ${500-80}px;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow: hidden;
    `,
    HeaderCompo:styled.header`
        position: relative;
        width: 100%;
        height: 30px;
        background: rgb(10,10,10);
    `,
    FooterCompo:styled.footer`
        position: relative;
        width: 100%;
        height: 30px;
        background: rgb(10,10,10);
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    `
}

export const SettingCompo = {
    Container:styled.div<{switchOn:boolean}>`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: ${props=>props.switchOn ? 0 : -120}%;
        display: grid;
        grid-template-rows: 60px 410px 30px;
        grid-template-columns: 550px 250px;
        grid-template-areas: 
            "header aside"
            "main aside"
            "footer footer"
        ;
        background: #eee;
        z-index: 5;
        transition: all .3s linear;
    `,
    HeaderCompo:styled.header`
        grid-area: header;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        box-sizing: border-box;
    `,
    MainCompo:styled.main`
        grid-area: main;
    `,
    AsideListCompo:styled.aside`
        grid-area: aside;
        background: #331D6E;
        overflow: hidden;
    `,
    FooterCompo:styled.footer`
        grid-area: footer;
        display: flex;
        justify-content: flex-start;
    `
}