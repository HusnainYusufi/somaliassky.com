import React, { useState, useRef, useEffect } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import GeneralMap from "../../components/contact/GeneralMap";
import { useParams } from "react-router-dom";
import imguser from "../../assets/images/user.png";

import { GiChickenOven } from "react-icons/gi";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { url, ImageUrl } from "../../environment";
import markericon from "../../assets/images/map-marker.png";
// import googleMapStyles from '../common/GoogleMapStyle'
import mpIcon from "../../assets/images/map-marker.png";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Marker = ({ text, icon }) => (
  <img src={icon} alt={text} style={{ width: 40, height: 40 }} />
);

const markerStyle = {
  position: "absolute",
  width: 20,
  height: 20,
  backgroundColor: "red",
  borderRadius: "50%",
  animation: "bounce 2s infinite",
};

export default function MapViewCluster({ marker }) {
  // 1) map setup
  const mapRef = useRef();
  const [Cordinates, setAllCordinates] = React.useState([]);
  const [AllListing, setAllListing] = useState([]);

  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  // const [markers, setMarkers] = useState([
  //     { lat: 37.7749, lng: -122.4194, text: 'San Francisco', icon:markericon },
  //     { lat: 40.7128, lng: -74.0060, text: 'New York', icon: markericon },
  //   ]);
  const { id } = useParams();
  useEffect(() => {
    // window.scrollTo(0, 0);
    getAllCordinate();
  }, []);
  // 2) load and format data
  const urlNew =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.6376&lng=-1.135171&data=2019-10";
  const { data, error } = useSwr(urlNew, fetcher);
  const [isLoading, setLoading] = useState(false);

  const crimes = data && !error ? data.slice(0, 9) : [];
  const [LoadingListing, setLoadingListing] = useState(false);

  const points = crimes?.map((crime) => ({
    type: "Feature",
    properties: {
      cluster: false,
      crimeId: crime.id,
      category: crime.category,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(crime?.location.longitude),
        parseFloat(crime?.location.latitude),
      ],
    },
  }));

  // 3) get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const getAllCordinate = () => {
    // setLoading(true)
    fetch(`${url}/listing/getAllCordinates`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Corrdinates------>>>", response);
        if (response.message === "Success") {
          let item = response.doc;

          setAllCordinates(item);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTimeStamp = (timestamp) => {
    const timeDifference = Date.parse(new Date()) - Date.parse(timestamp);
    let timeAgo;
    console.log(timeDifference, timestamp);
    if (timeDifference < 1000) {
      timeAgo = "Just now";
    } else if (timeDifference < 60000) {
      timeAgo = `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 3600000) {
      timeAgo = `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 86400000) {
      timeAgo = `${Math.floor(timeDifference / 3600000)} hours ago`;
    } else {
      timeAgo = `${Math.floor(timeDifference / 86400000)} days ago`;
    }

    return <span>{timeAgo}</span>;
  };

  // 4) render map
  return (
    <>
      <div className="map-container map-height w-100">
        <GeneralMap marker={Cordinates} />
      </div>
    </>
  );
}
