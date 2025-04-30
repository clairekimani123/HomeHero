import { useEffect, useState } from "react";
import React from "react";
import ProfileCard from "./ProfileCard";

export default function Profiles() {
  const [managers, setManagers] = useState([]);
  const [babysitters, setBabysitters] = useState([]);
  const [assistants, setAssistants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/houseManagers").then((res) => setManagers(res.data));
    axios.get("http://localhost:3001/babysitters").then((res) => setBabysitters(res.data));
    axios.get("http://localhost:3001/urgentAssistants").then((res) => setAssistants(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Verified Professionals</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">House Managers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {managers.map(profile => <ProfileCard key={profile.id} profile={profile} />)}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Babysitters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {babysitters.map(profile => <ProfileCard key={profile.id} profile={profile} />)}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Urgent Assistants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {assistants.map(profile => <ProfileCard key={profile.id} profile={profile} />)}
        </div>
      </section>
    </div>
  );
}