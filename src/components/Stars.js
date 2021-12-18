import React from "react";
import {AiFillStar} from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

export default function Stars({post}) {
  if (!post) return null;

  const stars = Array.from({length: 5}).map((_, i) => i);

  return (
    <Container>
      {stars.map(i => <AiFillStar key={i} size={9} color={i < post.rating ? 'teal' : 'grey'}/>)}
    </Container>
  );
}
