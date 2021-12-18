import styled, {css} from "styled-components";
import {FaTimesCircle} from "react-icons/fa";

export const customModalStyles = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    padding: 0,
    overflow: 'hidden',
  },
};

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const Slide = styled.div`
  height: 50vh;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 7vh;
  display: flex !important;
  flex-flow: column;

  @media screen and (min-width: 375px) {
    height: 55vh;
  }
  @media screen and (min-width: 425px) {
    height: 65vh;
  }
`;

export const Close = styled(FaTimesCircle)`
  position: absolute;
  top: 5%;
  right: 10%;
`;

export const Extra = styled.div`
  margin: 0 10px 10px;
  flex: 1;
`;

export const Dated = styled.div`
  font-weight: 500;
  margin-top: 10px;
`;

export const Text = styled.div`
  font-size: 0.9rem;
  margin-top: 10px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3rem;
`;

export const Full = styled.div`
  text-align: center;
  font-weight: bold;
  border-top: 1px solid;
  padding: 10px 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  display: block;

  @media screen and (min-width: 375px) {
    height: 65%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({single}) => single && css`
    .slick-list {
      display: flex;
      justify-content: center;
    }
  `}
`;
