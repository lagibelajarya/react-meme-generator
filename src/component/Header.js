export default function Header(props) {
  
  return (
    <div className="Header">
      <div className="Header__logo">
        <img className="Header__logo-img"  src="./images/TrollFace.svg" />
        <h1 className="Header__logo-name">meme generator</h1>
      </div>
      <p className="Header__title">React Course - Project 3</p>
    </div>
  );
}
