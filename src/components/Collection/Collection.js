import "./Collection.css";

function Collection() {
  const items = [
    {
      id: 1,
      image: "/collection1.jpg",
      title: "НАША НОВА КОЛЛЕКЦИЯ",
    },
    {
      id: 2,
      image: "/collection2.jpg",
      title: "НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ",
    },
    {
      id: 3,
      image: "/collection3.jpg",
    },
  ];

  return (
    <section className="collection">
      <div className="collection__top">
        {items.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="collection__card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="collection__overlay">
              <span>{item.title}</span>
              <div className="collection__icon">▶</div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="collection__bottom"
        style={{ backgroundImage: `url(${items[2].image})` }}
      >
        <div className="collection__side">
          <div className="collection__icon">▶</div>
        </div>
      </div>
    </section>
  );
}

export default Collection;