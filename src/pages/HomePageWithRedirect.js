import { useState } from "react";
import { Navigate } from "react-router-dom";

const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";

  
function HomePageWithRedirect(props) {
  const [authorized, setAuthorized] = useState(props.authorized);

  if(!authorized){
    return (<Navigate to='/' />)
  }
  else{
    return (
  <div>
      <h1>Home - With Redirect</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );}
}

export default HomePageWithRedirect;
