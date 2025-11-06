import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>wish me luck</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.path} key={index} className="icon">
              <img src={socialImg.imgPath} alt={`${socialImg.name} social media link`} />
            </a>
          ))}
        </div>
        <a className="flex flex-col justify-center" href="#">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} HEMA. All rights reserved.
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
