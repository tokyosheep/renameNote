import styled,{css} from "styled-components"

export const TextStyle = css<{size:number}>`
    font-family:Arial, Helvetica, sans-serif;
    font-size: ${props=>props.size}px;
    color: #575757;
`;

export const centerPlaced = css<{add?:string,y?:number,x?:number}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${props=> `translate(${props.x || "-50"}%,${props.y || "-50"}%)` + (props.add || "")};
`;

/*
export const ScrollBar = css`
    &::-webkit-scrollbar{
            width: 5px;
            height: 5px;
    }
    &::-webkit-scrollbar-track{
        background: rgba(50,50,50,0.3);
    }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 50, .5);
        border-radius: 10px;
        box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
    }
`;
*/