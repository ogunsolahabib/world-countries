import React from "react";
import {Map, GoogleApiWrapper} from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends React.Component {
  state = {lat: this.props.lat, lng: this.props.lng};
  componentWillReceiveProps(nextProps) {
    this.setState({
      lat: nextProps.lat,
      lng: nextProps.lng
    });
  }
  render() {
    console.log(this.state.loaded);

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
        />
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.lat === nextProps.lat) {
      return false;
    } else {
      return true;
    }
  }
  //   changeLat() {
  //     this.setState({isLoading: false, lat: this.props.lat, lng: this.props.lng});
  //   }
  //   componentDidUpdate(prevProps) {
  //     if (prevProps.google !== this.props.google) {
  //       this.setState({isLoading: false, lat: null, lng: null});
  //       this.checkLoad();
  //       console.log("changed");
  //     }
  //   }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBjFvy4KMp7CPUXHvKYqjx3uRSHs4X77Ms"
})(MapContainer);
