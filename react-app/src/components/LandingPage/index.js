import React from "react";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import './landingPage.css'


const LandingPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();

    // if (sessionUser) {
    //     return <Redirect to="/listings" />;
    // }
    const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(sessionActions.login('demo@aa.io', 'password'))
                .then(() => {
                    history.push("/listings");
                }
                );
        }
  if (sessionUser) {
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
                  The place for haute finds. <br />
                  Buy, sell and discover fashion, home decor and more
                </h2>
              </div>
            </div>
          </div>
        </>
      )
    } else {

      return (
        <>
          <div className="landingPageContainer">
            <div className="splashImage">
              <div className="welcomePageMessage">
                <h2>
                The place for haute finds. <br/>
                Buy, sell and discover unique fashion
                </h2>
                <button type="submit" className="demo-login-btn" onClick={handleSubmit}> Demo Login</button>
            </div>
            </div>
          </div>
        </>
      );
  
      }
    }
export default LandingPage;