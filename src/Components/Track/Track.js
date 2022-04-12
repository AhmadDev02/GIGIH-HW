import React from 'react';

import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className='btn btn-success btn-lg' onClick={this.removeTrack}>Cancel</button>
    }
    return <button className='btn btn-success btn-lg' onClick={this.addTrack}>Select</button>;
  }

  render() {
    return (
    <div classNam='main'>
      <div  className='row'>
        <div className='column'>
          <div className='content'>
              <img src={this.props.track.images}  alt='' />
              <h3 >{this.props.track.name}</h3>
              <p>{this.props.track.artist} | {this.props.track.album}</p>
              {this.renderAction()}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Track;


// WEBPACK FOOTER //
// ./src/components/Track/Track.js