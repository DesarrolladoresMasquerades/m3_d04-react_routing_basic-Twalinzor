import { useState } from "react";
import { Redirect } from "react-router-dom";

const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";

  
function HomePageWithRedirect() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (<div>Hello</div>);
}

export default HomePageWithRedirect;
