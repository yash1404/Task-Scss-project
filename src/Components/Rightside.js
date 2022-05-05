import React from "react";
import cartoon from "../Images/cartoon.png";
import { IoPlay } from "react-icons/io5";
import "../Styles/Rightside.css";

function Rightside() {
  return (
    <React.Fragment>
      <div className="Right-hand-side">
        <h1 className="top-head">Kelas terakhir</h1>

        <div className="img-cartoon">
          <img src={cartoon} alt="cartoon"></img>
        </div>

        <div className="box">
          <div className="play-circle">
            <span>
              <IoPlay className="playbtn" />
            </span>
          </div>

          <div className="progressbar">
            <div className="inside-bar"></div>
            </div>

            <h3>memantalaa etrurefe ddfdf yasefrg aseighrt dgvh emem.</h3>
            <p>3.221 paretera</p>
          </div>

          <div className="last-sec">
          <div className="left-sec-last">
          <p>Kadalaursa</p>
          <p>Jumlah perseta</p>
          <p>Dursai</p>
          </div>
          <div className="right-sec-last">
          <p>12 Juni 2021</p>
          <p>233</p>
          <p>4 Pertemuan</p>
          </div>
          </div>
        </div>
      
    </React.Fragment>
  );
}

export default Rightside;
