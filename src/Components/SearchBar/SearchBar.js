import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <TextField sx={{
          height: 100,
        }}
          id="outlined-basic"
          label="Enter A Song, Album, or Artist"
          variant="outlined"
          type="text"
          onChange={this.handleTermChange} />
        <br/>
        <Button type="submit" variant="contained" onClick={this.search}>SEARCH</Button>
      </div>
    );
  }
}

export default SearchBar;


