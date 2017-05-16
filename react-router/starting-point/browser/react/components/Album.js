import React from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

class Album extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      album: {},
      currentSong: "",
      isPlaying: false,
      toggleOne: false
    }

    // this.selectAlbum = this.selectAlbum.bind(this);
  }
  // const album = props.album;
  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggleOne = props.toggleOne;\
componentDidMount(){

  const albumId = this.props.routeParams.albumId;
  // console.log("WIll", this.props);
  console.log(this.props);
  const selectAlbum = this.props.selectAlbum;
  // console.log("WIll", selectAlbum);
  selectAlbum(albumId);
}

// selectAlbum(albumId){


// }

  render(){
    return (
    <div className="album">
      {console.log("", this.state)}
      {console.log("HERE", this.props)}

      <div>
        <h3>{ this.state.album.name }</h3>
        <img src={ this.state.album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={this.state.album.songs}
        currentSong={this.state.currentSong}
        isPlaying={this.state.isPlaying}
        toggleOne={this.state.toggleOne} />
    </div>
  );
  }
}

export default Album;



