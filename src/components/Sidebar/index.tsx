import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModuleActions } from "../../store/ducks/modules";

interface StateProps {

}

interface DispatchProps {

}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

class Sidebar extends Component<Props> {

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.addModule(this.input.value);

    this.input.value = "";
  };

  
  render() {
    const { modules, toggleModule, removeModule } = this.props;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input ref={el => (this.input = el)} />
          <button type="submit">Novo</button>
        </form>

        <ul>
          {modules.data.map(module => (
            <li key={module.id}>
              {module.complete ? <s>{module.text}</s> : module.text}
              <div>
                <button onClick={() => toggleModule(module.id)}>Toggle</button>
                <button onClick={() => removeModule(module.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
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
)(Sidebar);
