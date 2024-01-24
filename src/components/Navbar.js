function Navbar(props){
  return(
    <div>
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">{props.text}</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;