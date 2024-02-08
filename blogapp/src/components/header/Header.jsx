import "./header.css";
import homep from "../../../public/homep.jpg"
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Unleash the power of your thoughts and ingnite the world with your Magic</span>
        <span className="headerTitleLg">SPARKTALES</span>
      </div>
      <img
        className="headerImg"
        src={homep}
        alt=""
      />
    </div>
  );
}
