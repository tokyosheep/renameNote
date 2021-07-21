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