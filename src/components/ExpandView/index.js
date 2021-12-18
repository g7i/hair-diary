import React, {forwardRef, useImperativeHandle, useState} from "react";
import Slider from "react-slick";
import Modal from 'react-modal';
import {Close, customModalStyles, Dated, Details, Extra, Full, Image, Slide, Text, Wrapper} from "./styles";
import Avatars from "../Avatars";
import Stars from "../Stars";

function Expand(_, ref) {
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
    openWith: (posts) => {
      setPosts(posts);
      setVisible(true);
    },
  }));

  return (
    <Modal isOpen={visible} onRequestClose={() => setVisible(false)} style={customModalStyles}>
      <Close color='grey' size={30} onClick={() => setVisible(false)} style={{cursor: 'pointer'}}/>
      <Wrapper single={posts.length === 1}>
        <Slider {...settings(posts.length)}>
          {posts.map(post => (
            <Slide key={post.id}>
              <Image src={post.media[0]?.mediaurl}/>
              <Details>
                <Avatars post={post}/>
                <Stars post={post}/>
              </Details>
              <Extra>
                <Dated>{new Date(post.calendardatetime).toDateString()}</Dated>
                <Text>{post.text}</Text>
              </Extra>
              <Full>View full Post</Full>
            </Slide>
          ))}
        </Slider>
      </Wrapper>
    </Modal>
  );
}

export default forwardRef(Expand);

const settings = length => ({
  centerMode: true,
  arrows: false,
  infinite: length > 3,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        infinite: length > 2,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        infinite: length > 1,
        slidesToShow: 1,
      }
    },
  ],
});
