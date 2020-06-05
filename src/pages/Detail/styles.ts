import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1220px;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1332px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    height: 100%;
    max-height: 320px;
    margin-top: 25px;
    transition: 200ms ease;

    @media screen and (max-width: 650px) {
      max-height: 180px;
    } 
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    max-width: 620px;
    margin-top: 25px;

    h1 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    footer {
      margin-top: 32px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      h4 {
        font-size: 16px;
      }

      #container-links {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        align-items: center;
      }

      a {
        border-radius: 3px;
        box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
        padding: 05px 25px;
        font-size: 14px;
        font-weight: 600; 
        color: hsl(200, 15%, 8%, 0.6);
        transition: 300ms ease;

        :hover {
        box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.3);
        color: hsl(200, 15%, 8%);
        }
      }
  }  
}
`;

export const ParagraphsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1332px) {
    flex-direction: column;
    justify-content: center;
  }

  p {
    line-height: 25px;
    strong {
      font-size: 16px;
    }
    span {
      margin-left: 8px;
      font-size: 16px;
    }
  }
`;

export const LinkContainer = styled.div`
  width: 64%;
  display: flex;

  a {
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
  padding: 10px 60px;
  margin-bottom: 50px;
  color: hsl(200, 15%, 8%, 0.6);
  font-size: 16px;
  font-weight: 600;
  transition: 300ms ease;

  :hover {
    box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.3);
    color: hsl(200, 15%, 8%);
  }

  svg {
    margin-right: 10px;
  }
 }

`;
