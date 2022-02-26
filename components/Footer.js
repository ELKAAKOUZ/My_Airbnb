import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 gap-y-10 py-14 px-10 md:px-32">
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Safety information</p>
        <p>Our Covid-19 Response</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighborhood concern</p>
      </div>
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
      </div>
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">Hosting</h5>
        <p>Try hosting</p>
        <p>AirCover: protection for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
      </div>
    </div>
  );
}

export default Footer;
