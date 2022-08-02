import { connect } from "react-redux";
import Person from "./Person";

const mapStateToProps = (state) => {
  return {
    info: state.profilePage.info,
  };
};

const PersonContainer = connect(mapStateToProps)(Person);

export default PersonContainer;
