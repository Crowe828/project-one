import Search from "../../Components/Search";
import UnsplashImages from "../../Components/UnsplashImages";
import Whiteblot from "./Images/whiteblot.png";
import "./style.css";

export const Main = ({ handleFormSubmit, handleInputChange, results }) => {
  return (
    <div className="brick">
      <header className="logo">
        <img className="blot" src={Whiteblot} alt="ink blot" />
        <a href="https://fontmeme.com/fonts/tattoo-ink-font/">
          <img
            src="https://fontmeme.com/permalink/200928/31d78e111c03d6f7ca31b4ea87a9a578.png"
            alt="tattoo-ink-font"
          />
        </a>
        <a href="https://fontmeme.com/fonts/slim-sans-serif-font/">
          <img
            src="https://fontmeme.com/permalink/200928/d544046b030a1407b8b0f937bec183ed.png"
            alt="slim-sans-serif-font"
          />
        </a>
      </header>

      <main className="container main-container">
        <div className="searchCard">
          <h2 className="spray">
            Welcome, type in the idea of your tattoo and click submit. <br />
            We'll provide you with creative images and the nearest tattoo artist
            near you!
          </h2>
          
          {/* Searchbar */}
          <Search
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
          {/* Unsplash Images */}
          <UnsplashImages results={results} />
        </div>
        <div className="google-maps">
          <div id="panel"></div>

          <div id="map"></div>
        </div>
      </main>
      <footer>
        <h4 className="copy">Ink Map | The Wombats &copy;</h4>
      </footer>
    </div>
  );
};

export default Main;
