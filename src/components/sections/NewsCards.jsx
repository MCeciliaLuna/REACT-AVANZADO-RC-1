export const NewsCards = ({ news }) => {
  return (
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {news.map((item) => (
        <div className="feature col" key={item.id}>
          <h3 className="fs-2">{item.title}</h3>
          <p>{item.description}</p>
          <a href="#" className="btn btn-primary fw-bold">
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
};

NewsCards.defaultProps = {
  news: [
    {
      id: 1,
      title: "Curso de ReactJs",
      description: "DEFAULT PROPS",
    },
    {
      id: 2,
      title: "Curso de NodeJs",
      description: "DEFAULT PROPS",
    },
    {
      id: 3,
      title: "Curso React Native",
      description: "DEFAULT PROPS",
    },
  ],
};
