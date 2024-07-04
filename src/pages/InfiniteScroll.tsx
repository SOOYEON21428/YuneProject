// InfiniteScroll.tsx

import React, { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import imagesData from '../data/imagesData';

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 25%; 
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageElement = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const InfiniteScroll: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState(imagesData.slice(0, 8)); // 초기에 8개 이미지 로드
  const [isLoading, setIsLoading] = useState(false);

  const { ref, inView } = useInView();

  const loadMoreImages = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleImages((prevImages) => [
        ...prevImages,
        ...imagesData.slice(prevImages.length, prevImages.length + 8), // 4개씩 추가
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  React.useEffect(() => {
    if (inView && !isLoading) {
      loadMoreImages();
    }
  }, [inView, isLoading, loadMoreImages]);

  return (
    <Container>
      {visibleImages.map((image) => (
        <ImageWrapper key={image.id}>
          <ImageElement src={image.url} alt={`Image ${image.id}`} />
        </ImageWrapper>
      ))}
      <div ref={ref}></div>
      {isLoading && <div>Loading...</div>}
    </Container>
  );
};

export default InfiniteScroll;
