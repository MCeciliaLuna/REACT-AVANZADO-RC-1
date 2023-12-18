export const CallToActionCards = ({ news }) => {
  return (
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 d-flex align-items-center">
      {news.map((item) => (
        <div
          className="feature col d-flex flex-column text-center"
          key={item.id}
        >
          <h3 className="fs-3">{item.title}</h3>
          <a href="#" className="fw-bold">
            {item.subtitle}
          </a>
        </div>
      ))}
    </div>
  );
};
