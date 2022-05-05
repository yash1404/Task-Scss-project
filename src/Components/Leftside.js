import React from "react";
import Sidenavbar from "./Sidenavbar";
import circle from "../Images/circlefull.png";
import graph from "../Images/graphfull.png";
import "../Styles/Leftside.css";
import Rightside from "./Rightside";

function Leftside() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1">
            <Sidenavbar />
          </div>
          <div className="col-lg-7">
            <div className="main-box">
              {/* information*/}
              <div className="info">
                <h4>Hai,Romlan</h4>
                <p>memantalaa etrurefe ddfdf yasefrg aseighrt dgvh emem.</p>
              </div>
              {/* images-section*/}
              <div className="image-sec">
                {/* <div className="left-img">
                <h2>kelas selesai</h2>
                <h1>381</h1>
                <img src={circle} alt="circle" />
              </div>
              <div className="right-img">
                <h1>Aktivias minggu ini</h1>
                <img src={graph} alt="graph"></img>
                <div className="img-bottom-sec">
                <div className="img-info">
                <h1>Total belajar</h1>
                <p>18j 13m</p>
                </div>
                <div className="img-info">
                <h1>Hari tereupidukar</h1>
                <p>4j 30m</p>
                </div>
                </div>
  </div> */}
                <img className="circle-img" src={circle} alt="circle"></img>
                <img className="right-side-img" src={graph} alt="circle"></img>
              </div>
              {/*bottom-section*/}
              <div className="bottom-sec">
                <h1>Sertifikat</h1>
                <div className="bottom-info-container">
                  <div className="bottom-info">
                    <h1>no</h1>
                    <span>1</span>
                  </div>
                  <div className="bottom-info-two">
                    <h1>kelas</h1>
                    <p>memantalaa etrurefe ddfdf grtys yasefrg aseighrt dgvh emem.</p>
                  </div>
                  <div className="bottom-info">
                    <h1>pengajar</h1>
                    <p>John sumakir</p>
                  </div>
                  <div className="bottom-info">
                    <h1>nilai</h1>
                    <p>89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Rightside />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Leftside;
