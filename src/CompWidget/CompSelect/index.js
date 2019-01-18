import React from "react";
import Select from "react-select";
import styles from "./styles";

// needs to be removed to styles.js
const indicatorSeparatorStyle = {
  alignSelf: "stretch",
  marginBottom: 8,
  marginTop: 8,
  width: 1
};

// I guess I should keep it
const IndicatorSeparator = ({ innerProps }) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

class CompSelect extends React.Component {
  render() {
    return (
      <Select
        closeMenuOnSelect={false}
        components={{ IndicatorSeparator }}
        isMulti
        options={attributes}
        placeholder="Select Attribute"
      />
    );
  }
}

export default CompSelect;
