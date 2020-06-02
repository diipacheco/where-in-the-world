import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 120px;
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  max-width: 320px;
  flex-direction: column;
  background: hsl(0, 0%, 100%);
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);

  img {
    max-width: 100%; 
    width: 320px;
    height: 190px;
    object-fit: cover;
  }


  section {
    padding: 20px;
  }

  .country-details {
    margin-top: 25px;

    p {
      strong {
        margin-right: 5px;
        font-weight: 600;
      }
    }
  }

`;

interface ImageProp {
  image: string
}
