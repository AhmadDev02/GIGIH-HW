import React from 'react';

// import SearchBar from '../Components/SearchBar/SearchBar';
import Masuk from '../Components/Login/Masuk'


import Spotify from '../util/Spotify';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginResults: [],
    };

    this.login = this.login.bind(this);
  }

  login(term) {
    Spotify.search(term).then(loginResults => {
      this.setState({searchResults: loginResults});
    });
  }

  render() {
    return (
      <div>
        <div >
          <Masuk onLogin={this.login} />
        </div>
      </div>
    );
  }
}

export default Login;
