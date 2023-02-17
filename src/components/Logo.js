import logo from "../images/logo.png";

const Logo = () => {
  return (
    <img
      className="absolute h-16 sm:top-6 sm:left-6 md:top-12 md:left-12 lg:top-12 lg:left-12"
      src={logo}
      alt=""
    />
  );
};
export default Logo;
