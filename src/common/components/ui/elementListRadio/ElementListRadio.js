import React from "react";

class ElementListRadio extends React.Component {
  constructor(props){
    super(props);
  }
    
  handleChange = (e) => {
    return this.props.callback(e)
  } 
  
  render() {
    return (
      <div>
        <input type="radio" id={this.props.id} name={this.props.name} value={this.props.value} onChange={this.handleChange} />
        <label htmlFor={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}

export default ElementListRadio;