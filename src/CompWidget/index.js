import React from "react";
import CompSelect from "./CompSelect/index";
// import CompTable from "./CompTable/index";
import styles from "./styles";

class CompWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      attributes: [
        {
          id: 0,
          title: "Wool",
          key: "attribute",
          label: "wool"
        },
        {
          id: 1,
          title: "Silk",
          key: "attribute",
          label: "silk"
        },
        {
          id: 3,
          title: "Polyester",
          key: "attribute",
          label: "polyester"
        },
        {
          id: 4,
          title: "Cotton",
          key: "attribute",
          label: "cotton"
        }
      ]
    };
  }

  render() {
    // I guess I do need a method here

    return (
      // 1. select component

      // 2. table component
      <div style={styles.container}>
        {this.state.attributes.map((attribute, index) => (
          <CompSelect key={index} />
        ))}
      </div>
    );
  }
}

export default CompWidget;

/*

  NOTES:

  - This component follows folder pattern: https://nikitajajodia.com/2018/05/04/component-folder-pattern-in-react-js/

*/
