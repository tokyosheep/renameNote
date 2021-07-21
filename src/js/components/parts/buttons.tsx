import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { IoIosArrowBack } from "react-icons/io";
import { lightButtonColor , buttonColor } from "../../styles/commonValue";

import { centerPlaced } from "../../styles/mixin";

const cautionColor = "#F53ABC";

const MenuButtonStyle = styled.button`
    border: none;
    width: 100%;
    height: 30px;
    color: #fff;
    background: #88a3fd;
    border-bottom: 1px solid ${lightButtonColor};
    position: relative;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background: ${darken(0.2,lightButtonColor)};
    }
    & > div{
        ${centerPlaced};
        color: #fff;
        font-size: 12px;
        font-weight: 300;
    }
`;

type ButtonProps = {
    name:string,
    func:(name?:string)=>void
}

export const MenuButton:(props:ButtonProps)=>JSX.Element = ({name,func}) =>{
    return(
        <MenuButtonStyle onClick={()=>func(name)}>
            <div>
                {name}
            </div>
        </MenuButtonStyle>
    )
}

const StdButtonStyle = styled.button`
    border: none;
    width: 100px;
    height: 25px;
    background: ${buttonColor};
    position: relative;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background: ${darken(0.2,buttonColor)};
    }
    & > div{
        ${centerPlaced};
        color: #fff;
        font-size: 12px;
        font-weight: 300;
    }
`;

export const StdButton:(props:ButtonProps)=>JSX.Element = ({name,func}) =>{
    return(
        <StdButtonStyle onClick={()=>func()}>
            <div>
                {name}
            </div>
        </StdButtonStyle>
    )
}

const MainButtonStyle = styled.button<{caution:boolean}>`
    border: none;
    background: ${props=>props.caution ? cautionColor : buttonColor};
    width: 120px;
    height: 25px;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background: ${ props=>props.caution ?  darken(0.2,cautionColor) : darken(0.2,buttonColor)};
    }
    & > span{
        ${centerPlaced};
        color: #fff;
        font-size: 10px;
        font-weight: 300;
        display: block;
    }
`;

export const MainButton:(props:ButtonProps&{caution?:boolean})=>JSX.Element = ({name,func,caution=false}) =>{
    return(
        <MainButtonStyle caution={caution} onClick={()=>func()}>
            <span>
                {name}
            </span>
        </MainButtonStyle>
    )
}

const BackButtonStyle = styled.button<{x:0}>`
    border: none;
    background: ${lightButtonColor};
    width: 170px;
    height: 25px;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background: ${darken(0.2,lightButtonColor)};
    }
    & > div{
        ${centerPlaced};
        left: 60%;
        color: #fff;
        font-size: 12px;
        font-weight: 300;
    }
`;

const ArrowIcon = styled(IoIosArrowBack)`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
    fill:#fff;
`;

export const BackButton:(props:ButtonProps)=>JSX.Element = ({name,func}) =>{
    return(
        <BackButtonStyle x={0} onClick={()=>func()}>
            <ArrowIcon></ArrowIcon>
            <div>
                {name}
            </div>
        </BackButtonStyle>
    )
}