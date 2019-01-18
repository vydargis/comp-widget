import React from "react";
import Select from "react-select";
import styles from "./styles";

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", disabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" }
];

// needs to be moved to styles.js
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
  constructor() {
    super();
    this.state = {
      inputField: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    this.setState({
      inputField: ""
    });
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            id="theInput"
            value={this.state.inputField}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CompSelect;

// <Select
//   closeMenuOnSelect={false}
//   components={{ IndicatorSeparator }}
//   isMulti
//   options={colourOptions}
//   placeholder="Select Attribute"
// />
