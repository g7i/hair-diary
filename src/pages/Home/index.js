import React, {useEffect, useRef, useState} from "react";
import VirtualList from 'react-tiny-virtual-list-oss';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import axios from "axios";
import ExpandView from "../../components/ExpandView";
import {
  Cell,
  Container,
  DaysCell,
  DaysRow,
  Header,
  Image,
  Left,
  Month,
  MonthColored,
  Row,
  Title,
  TitleColored,
} from "./styles";
import Stars from "../../components/Stars";
import Avatars from "../../components/Avatars";
import useWindowSize from "../../hooks/useWindowSize";
import {getAllDates} from "../../utils/getAllDates";
import {Days, WeeksDifference} from "../../constants/common";
import getRequestBody from "../../utils/getRequestBody";

const allDates = getAllDates();
function getItemSize(width) {
  if (width >= 1440) return 180;
  if (width >= 1024) return 160;
  return 120;
}

export default function Home() {
  const [posts, setPosts] = useState({});
  const [middleDate, setMiddleDate] = useState(new Date());
  const token = useRef(null);
  const sliderRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { width } = useWindowSize();

  const itemSize = getItemSize(width);

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios.post('https://api.quinn.care/graph', getRequestBody(token.current));
      const { responseobjects } = data;
      const { continuationtoken, posts: resPosts } = responseobjects[0];
      token.current = continuationtoken;
      setPosts(prev => {
        const old = JSON.parse(JSON.stringify(prev));
        resPosts.forEach(post => {
          const key = new Date(post.calendardatetime).toLocaleDateString();
          if (old[key]?.length) old[key].push(post);
          else old[key] = [post];
        });
        return old;
      });
    } catch (e) {
      console.log(e)
    }
    setLoading(false);
  };

  useEffect(() => {
    let timeout;
    if (!Object.keys(posts).length) fetchData();
    else timeout = setTimeout(fetchData, 2000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [middleDate]);

  const handleRender = ({ startIndex, stopIndex }) => setMiddleDate(allDates[Math.floor((startIndex + stopIndex) / 2)][3]);

  const handleClick = data => data?.length && sliderRef.current?.openWith(data);

  const renderDate = ({ index, style }) => (
    <Row key={index} style={style}>
      {allDates[index].map((date, i) => (
        <Cell key={date?.toDateString() ?? i} onClick={() => handleClick(posts[date?.toLocaleDateString()])}>
          <div>{date?.getDate()}</div>
          {posts[date?.toLocaleDateString()]?.length && (
            <>
              <Stars post={posts[date?.toLocaleDateString()]?.[0]} />
              <Image src={posts[date?.toLocaleDateString()]?.[0].media[0]?.mediaurl}/>
              <Avatars post={posts[date?.toLocaleDateString()]?.[0]} />
            </>
          )}
        </Cell>
      ))}
    </Row>
  );

  return (
    <Container>
      <Header>
        <Left>
          <AiOutlineArrowLeft size={22}/>
          <Title>
            <TitleColored>my</TitleColored> hair diary
          </Title>
        </Left>
        <Month>
          <MonthColored>{middleDate.toDateString().slice(4, 8)}</MonthColored> {middleDate.getFullYear()}
        </Month>
      </Header>
      <DaysRow>
        {Days.map((day, i) => <DaysCell key={i}>{day}</DaysCell>)}
      </DaysRow>
      <VirtualList
        width='100%'
        height={window.innerHeight}
        itemCount={allDates.length}
        itemSize={itemSize}
        scrollOffset={itemSize * WeeksDifference}
        onItemsRendered={handleRender}
        renderItem={renderDate}
      />
      <ExpandView ref={sliderRef} />
    </Container>
  );
}
