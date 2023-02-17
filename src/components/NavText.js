const NavText = (props) => {
  return (
    <div className="nav-text sm:hidden md:block lg:block absolute right-0 -bottom-20 font-extrabold">
      {props.info}
    </div>
  );
};
export default NavText;
