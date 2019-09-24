import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// COMPONENTS
import OffSearch from "../components/search";

// ACTIONS
import Creators from "../store/ducks/reprodutions";
import Token from "../store/ducks/token";

class Search extends Component {
  handleSearch = e => {
    e.preventDefault();
    const { token } = this.props;
    const { value } = e.target;
    this.props.reprodutionGet(token, value);
  };

  render() {
    const { audioControl } = this.props
    return (
      <div className="content">
        <OffSearch
          audioControl={audioControl}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.reprodution,
  token: state.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators, ...Token }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
