import { styled } from "styled-components";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 280px));
  grid-gap: 24px;
  justify-content: center;
`;
