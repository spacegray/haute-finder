import React from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './landingPage.css'


function LandingPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.sessionUser);

    if (sessionUser) {
        return <Redirect to="/home" />;
    }
    const handleSubmit = (e) => {
            e.preventDefault();
            return dispatch(sessionActions.login('demo@aa.io', 'password'))

        }
    return (
      <>
        <div className="landingPageContainer">
          <div className="splashImage">
            {/* <img
              src="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637224888/HauteFinder/Images/landing-page-img_uvgdjv.jpg"
              alt="splash"
            /> */}
            <div className="welcomePageMessage">
              <h2>
              The place for haute finds. <br/>
              Buy, sell and discover fashion, home
              decor and more
              </h2>
          </div>
          </div>
        </div>
      </>
    );

    }
export default LandingPage;