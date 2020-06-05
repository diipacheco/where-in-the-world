import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
  color: ${(props) => props.theme.colors.text};  
`;

export const Switch = styled.button`
  display: flex;
  background: none;
  border: none;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};  
  padding: 20px;
  svg {
    margin-right: 10px;
  }
`;
