import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 160px;
  margin-bottom: 80px;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    display: inline-block;
  }
  h2 {
    margin-bottom: 32px;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 32px;
  }
  div {
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 20px;
    width: 500px;
  }
  img {
    width: 450px;
  }
`;

const Button = styled.button`
  padding: 16px 32px;
  color: #313131;
  background-color: white;
  border: 2px solid black;
  margin-rigth: 32px;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 160px;
`;

export default Recipe;
