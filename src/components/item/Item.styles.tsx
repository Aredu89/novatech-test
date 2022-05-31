import styled from 'styled-components';

export const ItemContainer = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 2fr 10%;
  column-gap: 20px;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 3px 3px 12px -3px rgba(0,0,0,0.5);
  margin-bottom: 20px;
  @media screen and (max-width: 850px) {
    height: 120px;
  }
`;

export const TitleContainer = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
