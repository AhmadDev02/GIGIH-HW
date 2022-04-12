import React from 'react';



class Masuk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.login = this.login.bind(this);
  }

  login() {
    this.props.onLogin(this.state.term);
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Masuk;


