import React from "react";
import "./New.css";

function New() {
  const newItems = [
    { id: 1, image: "/path1.jpg" },
    { id: 2, image: "/path2.jpg" },
    { id: 3, image: "/path3.jpg" },
    { id: 4, image: "/path4.jpg" },
  ];

  return (
    <section className="new">
      <h2 className="new__title">НОВИНКИ</h2>

      <div className="new__container">
        {newItems.map((item, index) => (
          <div
            key={item.id}
            className={`new__item new__item--${index + 1}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
    </section>
  );
}

export default New;