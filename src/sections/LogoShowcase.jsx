import { logoIconsList } from "../constants";

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <div className="flex-none flex-center marquee-item" key={index}>
            <img src={icon.imgPath} alt={`${icon.name} company logo`} />
          </div>
        ))}

        {logoIconsList.map((icon, index) => (
          <div className="flex-none flex-center marquee-item" key={index}>
            <img src={icon.imgPath} alt={`${icon.name} company logo`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
