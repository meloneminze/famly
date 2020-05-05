import styled from '@emotion/styled';

const FullContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 550px;
  max-height: 760px;
  margin: auto;
  & > div {
    margin-top: 20px;
  }
`;

export default FullContainer;
