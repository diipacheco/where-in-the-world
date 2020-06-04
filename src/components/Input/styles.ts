import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  max-width: 320px;
  height: 50px;
  align-items: center;
  margin-left: 98px;
  @media screen and (max-width: 482px) {
    margin: 0 auto;
  }
  svg {
    position: absolute;
    margin-left: 18px;
  }
  input {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: none;
    box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
    padding-left: 48px;
    ::placeholder {
      color: hsl(0, 0%, 52%);
      font-weight: 600;
    } 
  }
  
`;
