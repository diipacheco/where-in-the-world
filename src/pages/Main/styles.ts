import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1820px;

  .inputs-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ListContainer = styled.ul`
   margin-top: 60px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 50px;

   @media screen and (max-width: 988px) {
   grid-template-columns: repeat(3, 1fr);
   }
   @media screen and (max-width: 724px) {
   grid-template-columns: repeat(2, 1fr);
   }
   @media screen and (max-width: 511px) {
   grid-template-columns: repeat(1, 1fr);
   }
 `;

export const ListItem = styled.li`
   display: flex;
   width: 100%;
   max-width: 220px;
   flex-direction: column;
   background: ${(props) => props.theme.colors.elements};
   box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
   justify-self: center;

   img {
     max-width: 100%;
     width: 240px;
     height: 160px;
     object-fit: cover;
   }

   a {
    color: ${(props) => props.theme.colors.text}; 
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
