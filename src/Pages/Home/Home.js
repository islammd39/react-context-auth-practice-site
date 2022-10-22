import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import HomeCard from "../../Shared/HomeCard/HomeCard";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/fish")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-4 mx-2 py-3">
        {categories.map((category) => (
          <HomeCard key={category.url} category={category}></HomeCard>
        ))}
      </Row>
    </div>
  );
};

export default Home;
