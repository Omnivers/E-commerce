const Header = () => {
  const getStarted = document.getElementById("box");
  const handleButtonClick = () => {
    getStarted.scrollIntoView({block: "center", behavior: "smooth"});
  }


    return <button className="btn glass" onClick={handleButtonClick}>Get Started</button>
  }
  
  export default Header
  