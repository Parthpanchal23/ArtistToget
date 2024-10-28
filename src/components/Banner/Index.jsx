import React,{useEffect,useRef} from "react";
import Search from "./Search";
import { HIRER, ARTIST } from "../../lib/Constant";
function Banner({ Role, BackImg, children }) {
  const videoRef= useRef(null);
    useEffect(()=>{
        return(()=>{

            if(videoRef.current)
            {
                videoRef.current.play();
            }
        })
    },[])
  const Layout = ({ role, children }) => {
    if (role === ARTIST) {
      return (
        <>
          <div className="intro-banner dark-overlay big-padding">
            <div className="transparent-header-spacer"></div>
            {children}
            <div
              className="video-container"
              data-background-image={BackImg?BackImg:"./images/home-video-background-poster.jpg"}
            >
              <video  ref={videoRef} loop   muted >
                <source
                  src="./images/home-video-background.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </>
      );
    }

    if (role === HIRER) {
      return (
        <div
          className="intro-banner dark-overlay"
          data-background-image={BackImg?BackImg:"./images/home-background-02.jpg"}
        >
          <div className="transparent-header-spacer"></div>
          {children}
        </div>
      );
    }

    return (
      <div className="intro-banner" data-background-image={BackImg}>
        {children}
      </div>
    );
  };
  return (
    <div>
      <Layout role={Role}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">{children}</div>
          </div>

          <Search Role={Role} />
          {Role != HIRER && (
            <div className="row">
              <div className="col-md-12">
                <ul className="intro-stats margin-top-45 hide-under-992px">
                  <li>
                    <strong className="counter">1,586</strong>
                    <span>Jobs Posted</span>
                  </li>
                  <li>
                    <strong className="counter">3,543</strong>
                    <span>Tasks Posted</span>
                  </li>
                  <li>
                    <strong className="counter">1,232</strong>
                    <span>Freelancers</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default Banner;
