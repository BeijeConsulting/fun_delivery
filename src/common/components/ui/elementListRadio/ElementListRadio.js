import React from "react";

class ElementListRadio extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" id={this.props.id} name={this.props.name} value={this.props.value} />
        <label for={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}

export default ElementListRadio;