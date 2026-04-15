import React from "react";
import "./Recommendation.css";

function Recommendation() {
  const recommendations = [
    { id: 1, image: "/path-to-img1.jpg", title: "НАЗВА НАБОРУ" },
    { id: 2, image: "/path-to-img2.jpg", title: "НАЗВА НАБОРУ" },
    { id: 3, image: "/path-to-img3.jpg", title: "НАЗВА НАБОРУ" },
    { id: 4, image: "/path-to-img4.jpg", title: "НАЗВА НАБОРУ" },
    { id: 5, image: "/path-to-img5.jpg", title: "НАЗВА НАБОРУ" },
    { id: 6, image: "/path-to-img6.jpg", title: "НАЗВА НАБОРУ" },
    { id: 7, image: "/path-to-img7.jpg", title: "НАЗВА НАБОРУ" },
  ];

  const bestSellers = [
    { id: 8, image: "/path8.jpg", title: "НАЗВА НАБОРУ" },
    { id: 9, image: "/path9.jpg", title: "НАЗВА НАБОРУ" },
    { id: 10, image: "/path10.jpg", title: "НАЗВА НАБОРУ" },
    { id: 11, image: "/path11.jpg", title: "НАЗВА НАБОРУ" },
    { id: 12, image: "/path12.jpg", title: "НАЗВА НАБОРУ" },
    { id: 13, image: "/path13.jpg", title: "НАЗВА НАБОРУ" },
    { id: 14, image: "/path14.jpg", title: "НАЗВА НАБОРУ" },
  ];

  const renderTrack = (data) => (
    <div className="recommendation__container">
      <div className="recommendation__track">
        {data.map((item) => (
          <div
            key={item.id}
            className="recommendation__card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="recommendation__label">{item.title}</div>
          </div>
        ))}
      </div>
      <button className="recommendation__arrow">
        <span>▶</span>
      </button>
    </div>
  );

  return (
    <section className="recommendation">
      <h2 className="recommendation__title">РЕКОМЕНДАЦІЇ</h2>
      {renderTrack(recommendations)}

      <h2 className="recommendation__title recommendation__title--bottom">
        НАЙКРАЩІ НАБОРИ
      </h2>
      {renderTrack(bestSellers)}
    </section>
  );
}

export default Recommendation;