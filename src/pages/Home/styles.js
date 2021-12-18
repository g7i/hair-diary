import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-top: 2px;
  font-size: 0.9rem;
  @media screen and (min-width: 1440px) {
    font-size: 1rem;
  }
`;

export const Cell = styled.div`
  border-bottom: 1px solid #00000020;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    height: 160px;
  }
  @media screen and (min-width: 1440px) {
    height: 180px;
  }

  &:not(:last-child) {
    border-right: 1px solid #00000020;
  }

  &:first-child {
    background-color: #00000010;
  }

  font-weight: 500;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 1.15rem;
  @media screen and (min-width: 1024px) {
    margin: 20px 40px;
  }
`;

export const Left = styled.header`
  display: flex;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-left: 20px;
  letter-spacing: 0.6px;
`;

export const TitleColored = styled.span`
  color: #00cbd5;
`;

export const Month = styled.div``;

export const MonthColored = styled.span`
  font-weight: bold;
`;

export const DaysRow = styled(Row)`
  font-size: 1rem;
  height: 30px;
  @media screen and (min-width: 1024px) {
    height: 40px;
  }
`;

export const DaysCell = styled(Cell)`
  border: none !important;
  display: grid;
  place-items: center;
  background-color: white !important;
  font-weight: 500;
  height: 30px;
  cursor: unset;
`;

export const Image = styled.img`
  width: 90%;
  height: 55%;
  object-fit: contain;
  display: block;
  @media screen and (min-width: 1440px) {
    margin-top: 5px;
  }
`;
