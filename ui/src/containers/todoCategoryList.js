import { connect } from "react-redux";
import { bindActionCreators } from "redux";

let mapStateToProps = state => {
  return {
    toDoCategoriesList: state.toDoCategoriesList
  };
};

export default connect(mapStateToProps);
