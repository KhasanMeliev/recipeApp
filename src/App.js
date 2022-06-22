import "./App.css";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Search />
      <Category />
      <Pages />
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    font-size: 2rem;
  }
`;

export default App;
