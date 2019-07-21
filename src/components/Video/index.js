import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModuleActions } from "../../store/ducks/modules";

class Video extends Component {
  render() {

    const { modules } = this.props;

    return (
      <div>
        <strong>Módulo {modules.currentId}</strong>
        <span>Aula  {modules.currentText}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modules: state.modules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModuleActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);

