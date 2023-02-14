import SinglePost from "../components/SinglePost";
import styled from "styled-components";

export default function Single() {
  return (
    <StyledSingle>
        <SinglePost/>
    </StyledSingle>
  )
}

const StyledSingle = styled.div`
    display: flex;
`;
