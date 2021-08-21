import { rgba } from "polished";
import * as React from "react";
import styled from "styled-components";
import { TextColor } from "../../../../styles/commonValue";

const ListBoxStyle = styled.li<{isRepetition:boolean}>`
    padding: 0;
    width: 100%;
    height: 30px;
    margin-bottom: 3px;
    border-bottom: 1px solid ${TextColor};
    display: flex;
    justify-content: flex-start;
    gap:3px;
    box-sizing: border-box;
    overflow: hidden;
    background: ${props=>props.isRepetition ? "#f55" : rgba(0,0,0,0)};
`;

const Circle = styled.div`
    width: 5px;
    height: 5px;
    background: ${TextColor};
    border-radius: 50%;
    margin: auto 0;
    margin-left: 3px;
`;

const TextBox = styled.div`
    color: ${TextColor};
    font-size: 12px;
    width: 100%;
    height: 20px;
    margin: auto 0;
`;

const ListBox:(props:{fileName:string,isRepetition:boolean})=>JSX.Element = ({fileName,isRepetition}) =>{
    return(
        <ListBoxStyle isRepetition={isRepetition}>
            <Circle></Circle>
            <TextBox>
                {fileName}
            </TextBox>
        </ListBoxStyle>
    )
}

export default ListBox;