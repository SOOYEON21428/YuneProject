interface Image {
  id: number;
  url: string;
}

const images = Array.from({ length: 56 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/300?random=${index + 1}`
}));

export default images;
