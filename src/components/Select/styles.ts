import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 180px;
  margin-right: 98px;

  select {
    width: 100%;
    padding: 15px;
    background: ${(props) => props.theme.colors.elements};
    color: ${(props) => props.theme.colors.text};
    border: none;
    border-radius: 5px;
    font-weight: 600;
  }  
`;
