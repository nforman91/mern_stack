import styled from "styled-components";

export default function SinglePost() {
  return (
    <StyledSinglePost>
        <StyledSinglePostWrapper>
            <StyledSinglePostTitle>TEST</StyledSinglePostTitle>
        </StyledSinglePostWrapper>
    </StyledSinglePost>
  )
}

const StyledSinglePost = styled.div`
    flex: 9;
`;

const StyledSinglePostWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
`;

const StyledSinglePostTitle = styled.h1`
    text-align: center;
    margin: 10px;
    font-size: 20px;
`;
