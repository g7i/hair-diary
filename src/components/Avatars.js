import React from "react";
import styled from "styled-components";
import Codes from "../constants/Codes";

export const Container = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: grid;
  place-items: center;
  font-size: 0.45rem;
  margin-left: 4px;
`;

export default function Avatars({ post }) {
  if (!post) return null;

  return (
    <Container>
      {post.typeofday?.map(day => Codes[day] && (
        <Avatar key={Codes[day].text} color={Codes[day].color}>{Codes[day].text}</Avatar>
      ))}
    </Container>
  );
}
