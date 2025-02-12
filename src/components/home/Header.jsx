import { PropTypes } from "prop-types";

const Header = ({ headingText }) => {
  return (
    <h1 className="text-3xl font-bold mb-5 mt-2 hover:text-4xl text-center">
      {headingText}
    </h1>
  );
};

Header.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default Header;
