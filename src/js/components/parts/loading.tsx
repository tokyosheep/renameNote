import * as React from "react";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { watching_set } from "../../redux/action/windowAction";
import styled,{keyframes} from "styled-components";
import { centerPlaced } from "../../styles/mixin";
import StateType from "../../redux/stateType";

const rotateing = keyframes`
    0%{
        transform: translate(0,-50%) rotateX(0deg);
        background: #fff;
    }

    50%{
        transform: translate(0,-50%) rotateX(180deg);
        background: #666;
    }

    100%{
        transform: translate(0,-50%) rotateX(360deg);
        background: #fff;
    }
`;

const OverLayer = styled.div<{isVisible:boolean}>`
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 20;
    display: ${props=>props.isVisible ? "block" : "none"};
`;

const Bar = styled.div<{index:number}>`
    width: 10px;
    height: 100%;
    background: #fff;
    transform: translate(0,-50%) rotateX(0deg);
    animation: ${rotateing} 4.2s linear ${props=>props.index/22}s infinite;
`;

const BarWrapper = styled.div`
    ${centerPlaced};
    height: 95px;
    width:80%;
    display: flex;
    justify-content: space-around;
`;

const WatchButton = styled.button`
    border: 3px solid #fff;
    color: #fff;
    font-size: 20px;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0);
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:hover{
        background: rgba(255,30,30,0.3);
    }
    &:active{
        color: #333;
        background: rgba(100,30,30,0.3);
    }
    transition: .2s linear;
`;

export const WatchingLayer = () =>{
    const dispatch = useDispatch();
    const visible = useSelector((state:StateType)=>state.isWatching);
    const empArray = new Array(30).fill("");
    const bars = empArray.map((emp,i)=><Bar key={i} index={i}></Bar>);
    const [isOver,setOver] = useState<boolean>(false);
    return(
        <OverLayer isVisible={visible}>
            <BarWrapper>
                {bars}
                <WatchButton 
                    onMouseOut={()=>setOver(false)} 
                    onMouseOver={()=>setOver(true)}
                    onClick={()=>dispatch(watching_set(false))}
                >
                    {isOver ? "stop watching" : "watching"}
                </WatchButton>
            </BarWrapper>
        </OverLayer>
    )
}