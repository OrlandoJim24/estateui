import SearchBar from "../../components/navbar/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore excepturi quos doloremque eos accusantium at maiores et, rem sint facilis ullam ducimus a architecto sequi quae aspernatur, corporis ea!</p>
        <SearchBar/>
        <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>
            <div className="box">
                <h1>2000+</h1>
                <h2>Properties Ready</h2>
            </div>
        </div>
        </div>
        </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="hero" />
      </div>
    </div>
  );
}

export default HomePage;