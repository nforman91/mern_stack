// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Topbar() {
  return (
    <StyledTop>
        <StyledTopLeft>
            <StyledTopIcon className="fa-brands fa-square-facebook"></StyledTopIcon>
            <StyledTopIcon className="fa-brands fa-square-twitter"></StyledTopIcon>
            <StyledTopIcon className="fa-brands fa-square-instagram"></StyledTopIcon>
        </StyledTopLeft>
        <StyledTopCenter>
            Topcenter
        </StyledTopCenter>
        <StyledTopRight>
            Topright
        </StyledTopRight>
    </StyledTop>
  )
};

const StyledTop = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 999;
`;

const StyledTopLeft = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTopCenter = styled.div`
    flex: 6;
`;

const StyledTopRight = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTopIcon = styled.i`
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
`;
