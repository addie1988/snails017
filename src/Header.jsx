import logo from "./images/max_logo.png";
import qr from "./images/qr.png";
import qr_0 from "./images/qr_0.png";

const Header = () => {
  return (
    <div className="header">
      <div className="rainbow_line"></div>
      <div className="header_content">
        <div className="header_logo">
          <div className="header_logo_content">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="header_title">
          <div className="header_title_content">
            <h1>Lava</h1>
          </div>
        </div>
        <div className="header_qr">
          <div className="header_qr_content">
            <img src={qr} alt="qr" />
          </div>
          <div className="header_qr_text">
            <div className="header_qr_text_content">
              <img src={qr_0} alt="icon" />
              <p>Lava on iOS</p>
              <p>Scan or Tap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
