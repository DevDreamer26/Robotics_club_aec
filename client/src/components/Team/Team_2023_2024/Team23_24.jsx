import React from "react";
import "../Team.css";
const Team23_24 = () => {
  const core_members = [
    {
      id: 1,
      name: "Krishnabh Das",
      logo: "images/Core members/23-24/Krishnabh Das.png",
      role: "President",
    },
    {
      id: 2,
      name: "Mriganka Patowary",
      logo: "images/Core members/23-24/Mriganka Patowary.png",
      role: "Vice President",
    },
    {
      id: 3,
      name: "Rakesh Roy",
      logo: "images/Core members/23-24/Rakesh Roy.png",
      role: "Secretary",
    },
    {
      id: 4,
      name: "Madhuryya Bhattacharyya",
      logo: "images/Core members/23-24/madhuryya bhattacharyya.png",
      role: "Treasurer",
    },
    {
      id: 5,
      name: "Sayanee Roy Barman",
      logo: "images/Core members/23-24/Sayanee Roy Barman.png",
      role: "Event Management Head",
    },
    {
      id: 6,
      name: "Bidyasagar Hazarika",
      logo: "images/Core members/23-24/Bidyasagar.png",
      role: "Technical Coordinator",
    },
    {
      id: 7,
      name: "Chinmoy Koch",
      logo: "images/Core members/23-24/Chinmoy Koch.png",
      role: "Makerspace Coordinator",
    },
    {
      id: 8,
      name: "Rhitwija Goswami",
      logo: "images/Core members/23-24/Rhitwija Goswami.png",
      role: "Content and Graphics Head",
    },
    {
      id: 9,
      name: "Dibyani Bora",
      logo: "images/Core members/23-24/Dibyani Bora.png",
      role: "Content Writer",
    },
    {
      id: 10,
      name: "Anshuman Gogoi",
      logo: "images/Core members/23-24/Anshuman Gogoi.png",
      role: "Event Management Associate",
    },
    {
      id: 11,
      name: "Tusar Sarma",
      logo: "images/Core members/23-24/Tusar Sarma.png",
      role: "Technical Associate",
    },
    {
      id: 12,
      name: "Satyajit Lahon",
      logo: "images/Core members/23-24/Satyajit Lahon.png",
      role: "Technical Coordinator (Hardware)",
    },
    {
      id: 13,
      name: "Bishal Sarma",
      logo: "images/Core members/23-24/Bishal Sarma.png",
      role: "Event Management Associate",
    },
    {
      id: 14,
      name: "Bhabartha Prakash Gogoi",
      logo: "images/Core members/23-24/Bhabartha-modified.png",
      role: "Makerspace Coordinator",
    },
    {
      id: 15,
      name: "Hrishikesh Deka",
      logo: "images/Core members/23-24/Hrishikesh Deka.png",
      role: "Graphics Designer",
    },
    {
      id: 16,
      name: "Bipraraj Das",
      logo: "images/Core members/23-24/Bipraraj Das.png",
      role: "Graphics Designer",
    },
    {
      id: 17,
      name: "Suksham Upamanyu",
      logo: "images/Core members/23-24/Suksham Upamanyu.png",
      role: "Video Editor",
    },

    {
      id: 18,
      name: "Ranisha choudhury",
      logo: "images/Core members/23-24/Ranisha Choudhury.png",
      role: "Public Relation",
    },
    {
      id: 19,
      name: "Bibhavdeep Talukdar",
      logo: "images/Core members/23-24/Bibhavdeep Talukdar.png",
      role: "Public Relation",
    },
    {
      id: 20,
      name: "Jyotirmoy Kalita",
      logo: "images/Core members/23-24/Jyotirmoy Kalita.png",
      role: "Outreach Associate",
    },
    {
      id: 21,
      name: "Rahul Kumar Bharadwaj",
      logo: "images/Core members/23-24/Rahul Bharadwaj.png",
      role: "Outreach Associate",
    },
  ];
  return (
    <>
      <div className="core_members-container">
        <h2>Core Committee 2023-2024 </h2>
        <br />
        <div className="core_members-list">
          {core_members.map((core_member) => (
            <div key={core_member.id} className="core_member-item">
              <img
                className="core_members-img"
                src={core_member.logo}
                alt={core_member.name}
              />
              <b>{core_member.name}</b>
              <p>{core_member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team23_24;
