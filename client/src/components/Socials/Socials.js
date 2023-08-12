import React, { Component } from "react";
import "./Socials.css";

class Socials extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="socials">
        <p>Можете да ме откриете в социалните мрежи за повече информация</p>
        <a href="https://www.facebook.com/profile.php?id=100063631506061">
            <button>
                <img width="55" height="55" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
            </button>
        </a>
        <a href="https://www.instagram.com/mutafchieva_psychologist_/">
            <button>
                <img width="55" height="55" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
            </button>
        </a>
        <button onClick={() => this.modal()}>
            <img width="55" height="55" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
        </button>
        <div id="modal">
          <div className="wrapper">
            <h3>Въведете Своят Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Socials;
