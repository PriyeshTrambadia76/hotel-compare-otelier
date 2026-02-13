export const fetchHotels = async (page) => {
  return {
    data: Array.from({ length: 6 }).map((_, i) => ({
      id: `${page}-${i}`,
      name: `Hotel ${page}-${i}`,
      price: 4000 + i * 500,
      rating: 4 + (i % 2),
    })),
  };
};
