import React from "react";
import Card from "./components/card";

const App = () => {
  const jobs = [
    {
      companyName: "Google",
      postDays: "2 days ago",
      jobRole: "Frontend Developer",
      tags: ["Full Time", "Remote", "Entry Level"],
      salary: "₹12,00,000 - ₹20,00,000 / year",
      location: "Bangalore, India",
    },
    {
      companyName: "Microsoft",
      postDays: "5 days ago",
      jobRole: "Backend Engineer",
      tags: ["Full Time", "Hybrid"],
      salary: "₹15,00,000 - ₹25,00,000 / year",
      location: "Hyderabad, India",
    },
    {
      companyName: "Amazon",
      postDays: "1 day ago",
      jobRole: "Software Development Engineer",
      tags: ["Full Time", "Remote Option"],
      salary: "₹20,00,000 - ₹35,00,000 / year",
      location: "Bangalore, India",
    },
    {
      companyName: "TCS",
      postDays: "3 days ago",
      jobRole: "Software Engineer",
      tags: ["Full Time", "Office"],
      salary: "₹4,50,000 - ₹8,00,000 / year",
      location: "Pune, India",
    },
    {
      companyName: "Infosys",
      postDays: "6 days ago",
      jobRole: "React Developer",
      tags: ["Full Time", "Hybrid"],
      salary: "₹5,00,000 - ₹10,00,000 / year",
      location: "Chennai, India",
    },
    {
      companyName: "Wipro",
      postDays: "4 days ago",
      jobRole: "UI/UX Designer",
      tags: ["Full Time"],
      salary: "₹4,00,000 - ₹9,00,000 / year",
      location: "Mumbai, India",
    },
    {
      companyName: "Meta",
      postDays: "7 days ago",
      jobRole: "Full Stack Developer",
      tags: ["Full Time", "Remote"],
      salary: "₹18,00,000 - ₹30,00,000 / year",
      location: "Remote",
    },
    {
      companyName: "Apple",
      postDays: "2 days ago",
      jobRole: "iOS Developer",
      tags: ["Full Time", "Office"],
      salary: "₹25,00,000 - ₹40,00,000 / year",
      location: "Bangalore, India",
    },
    {
      companyName: "Adobe",
      postDays: "3 days ago",
      jobRole: "JavaScript Engineer",
      tags: ["Full Time", "Hybrid"],
      salary: "₹14,00,000 - ₹22,00,000 / year",
      location: "Noida, India",
    },
    {
      companyName: "IBM",
      postDays: "8 days ago",
      jobRole: "Cloud Developer",
      tags: ["Full Time", "Remote"],
      salary: "₹10,00,000 - ₹18,00,000 / year",
      location: "Remote",
    },
    {
      companyName: "Oracle",
      postDays: "1 day ago",
      jobRole: "Java Developer",
      tags: ["Full Time", "Office"],
      salary: "₹12,00,000 - ₹22,00,000 / year",
      location: "Hyderabad, India",
    },
    {
      companyName: "Flipkart",
      postDays: "2 days ago",
      jobRole: "Frontend Engineer",
      tags: ["Full Time", "Hybrid"],
      salary: "₹10,00,000 - ₹17,00,000 / year",
      location: "Bangalore, India",
    },
    {
      companyName: "Zomato",
      postDays: "5 days ago",
      jobRole: "Node.js Developer",
      tags: ["Full Time", "Remote"],
      salary: "₹7,00,000 - ₹14,00,000 / year",
      location: "Remote",
    },
    {
      companyName: "Paytm",
      postDays: "4 days ago",
      jobRole: "Web Developer",
      tags: ["Full Time"],
      salary: "₹6,00,000 - ₹12,00,000 / year",
      location: "Noida, India",
    },
    {
      companyName: "Ola",
      postDays: "7 days ago",
      jobRole: "Data Engineer",
      tags: ["Full Time", "Office"],
      salary: "₹8,00,000 - ₹15,00,000 / year",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap  min-h-screen bg-gray-300">
      {jobs.map(function (props) {
        return (
          <Card
            companyName={props.companyName}
            postDays={props.postDays}
            jobRole={props.jobRole}
            tags={props.tags}
            salary={props.salary}
            location={props.location}
          />
        );
      })}
    </div>
  );
};

export default App;
