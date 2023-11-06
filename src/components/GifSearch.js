import React, { Component } from 'react';

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;
