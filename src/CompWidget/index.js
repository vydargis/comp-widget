import React from "react";
import CompSelect from "./CompSelect/index";
// import CompTable from "./CompTable/index";
import styles from "./styles";

class CompWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      fromChild: ""
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.containerSelect}>
          <CompSelect handlerFromParant={this.handleData} />
          <p>{this.state.fromChild}</p>
        </div>
        <div>{/* CompTable */}</div>
      </div>
    );
  }
}

export default CompWidget;

/*

  NOTES:

  - This component follows folder pattern: https://nikitajajodia.com/2018/05/04/component-folder-pattern-in-react-js/

  - https://codepen.io/PiotrBerebecki/pen/dpRdKP

*/
