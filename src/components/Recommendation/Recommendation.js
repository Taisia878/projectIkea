import React, { useRef, useState } from "react";
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
    { id: 11, image: "/path11.jpg", title: "НАЗВА НАБОРУ" },
    { id: 12, image: "/path12.jpg", title: "НАЗВА НАБОРУ" },
    { id: 13, image: "/path13.jpg", title: "НАЗВА НАБОРУ" },
    { id: 14, image: "/path14.jpg", title: "НАЗВА НАБОРУ" },
    { id: 15, image: "/path15.jpg", title: "НАЗВА НАБОРУ" },
    { id: 16, image: "/path16.jpg", title: "НАЗВА НАБОРУ" },
  ];

  const bestSellers = [
    { id: 8, image: "/path8.jpg", title: "НАЗВА НАБОРУ" },
    { id: 9, image: "/path9.jpg", title: "НАЗВА НАБОРУ" },
    { id: 10, image: "/path10.jpg", title: "НАЗВА НАБОРУ" },
    { id: 11, image: "/path11.jpg", title: "НАЗВА НАБОРУ" },
    { id: 12, image: "/path12.jpg", title: "НАЗВА НАБОРУ" },
    { id: 13, image: "/path13.jpg", title: "НАЗВА НАБОРУ" },
    { id: 14, image: "/path14.jpg", title: "НАЗВА НАБОРУ" },
    { id: 17, image: "/path17.jpg", title: "НАЗВА НАБОРУ" },
    { id: 18, image: "/path18.jpg", title: "НАЗВА НАБОРУ" },
    { id: 19, image: "/path19.jpg", title: "НАЗВА НАБОРУ" },
    { id: 20, image: "/path20.jpg", title: "НАЗВА НАБОРУ" },
  ];

  const Track = ({ data }) => {
    const trackRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);

    const scroll = (direction) => {
      const container = trackRef.current;
      const scrollAmount = 300;

      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        setShowLeft(container.scrollLeft > 0);
      }, 200);
    };

    return (
      <div className="recommendation__container">
        {showLeft && (
          <button
            className="recommendation__arrow left"
            onClick={() => scroll("left")}
          >
            <img src="/arrow-left.png" alt="left" />
          </button>
        )}

        <div className="recommendation__track" ref={trackRef}>
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

        <button
          className="recommendation__arrow right"
          onClick={() => scroll("right")}
        >
          <img src="/arrow.png" alt="right" />
        </button>
      </div>
    );
  };

  return (
    <section className="recommendation">
      <h2 className="recommendation__title">РЕКОМЕНДАЦІЇ</h2>
      <Track data={recommendations} />

      <h2 className="recommendation__title recommendation__title--bottom">
        НАЙКРАЩІ НАБОРИ
      </h2>
      <Track data={bestSellers} />
    </section>
  );
}

export default Recommendation;