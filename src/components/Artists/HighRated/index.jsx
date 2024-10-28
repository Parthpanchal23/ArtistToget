import React from "react";
import ArtistCard from "../ArtistCard";
import Heding from "../../Heding";

const HighRatedArtist = () => {
  const List = [
    {
      id: 1,
      name: "Leanne Graham",
      verified:true,
      rate: 50,
      img: {
        origin: "./images/user-avatar-big-01.jpg",
        tumbnail: "./images/user-avatar-big-01.jpg",
        url: "./images/user-avatar-big-01.jpg",
      },
      taskcompleted: "20%",
      href: "/",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        country:"China",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      profesional:{
        Title:"Dancer",
        type:"Dancer",
        experience:{year:2,month:10,day:0},
        description:" I'm Fadu sancer from china ",
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Arjun khpoor",
      rate: 60,
      verified:false,
      img: {
        origin: "./images/user-avatar-placeholder.png",
        tumbnail: "./images/user-avatar-placeholder.png",
        url: "./images/user-avatar-placeholder.png",
      },
      taskcompleted: "40%",
      href: "/",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        country:"India",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      profesional:{
        Title:"Singer",
        type:"Singer",
        experience:{year:1,month:20,day:2},
        description:"",
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
    id: 3,
    name: "Arjun khpoor",
    rate: 60,
    verified:false,
    img: {
        origin: "./images/user-avatar-big-02.jpg",
        tumbnail: "./images/user-avatar-big-02.jpg",
        url: "./images/user-avatar-big-02.jpg",
    },
    taskcompleted: "40%",
    href: "/",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        country:"India",
        zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
        lng: "81.1496",
        },
    },
    profesional:{
        Title:"Singer",
        type:"Singer",
        experience:{year:1,month:20,day:2},
        description:"",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
    },
    {
    id: 4,
    name: "Arjun khpoor",
    rate: 60,
    verified:false,
    img: {
        origin: "./images/user-avatar-placeholder.png",
        tumbnail: "./images/user-avatar-placeholder.png",
        url: "./images/user-avatar-placeholder.png",
    },
    taskcompleted: "40%",
    href: "/",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        country:"India",
        zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
        lng: "81.1496",
        },
    },
    profesional:{
        Title:"Singer",
        type:"Singer",
        experience:{year:1,month:20,day:2},
        description:"",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
    },
    {
    id: 5,
    name: "Arjun khpoor",
    rate: 60,
    verified:false,
    img: {
        origin: "./images/user-avatar-placeholder.png",
        tumbnail: "./images/user-avatar-placeholder.png",
        url: "./images/user-avatar-placeholder.png",
    },
    taskcompleted: "40%",
    href: "/",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        country:"India",
        zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
        lng: "81.1496",
        },
    },
    profesional:{
        Title:"Singer",
        type:"Singer",
        experience:{year:1,month:20,day:2},
        description:"",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
    },
  ];
  return (
    <div>
      <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
                <Heding title="Highest Rated Freelancers"> <a
                  href="freelancers-grid-layout.html"
                  className="headline-link"
                >
                  Browse All Freelancers
                </a></Heding>
            </div>

            <div className="col-xl-12">
              <div className="default-slick-carousel freelancers-container freelancers-grid-layout">
                {List.map((item,i)=><ArtistCard key={i} data={item}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighRatedArtist;
