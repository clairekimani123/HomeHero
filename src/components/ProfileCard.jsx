import React from 'react'

const ProfileCard = () => {
  return (
    <div className="bg-white rounded shadow overflow-hidden transition hover:shadow-lg">
        <img src={profile.maid1.jpeg} alt={profile.Elizabeth} className="w-full h-40 object-cover" />
        <img src={profile.maid2.jpeg} alt={profile.Joyce} className="w-full h-40 object-cover" />
        <img src={profile.maid3.jpeg} alt={profile.Joseph} className="w-full h-40 object-cover" />
        <img src={profile.babystr1.jpeg} alt={profile.Emily} className="w-full h-40 object-cover" />
        <img src={profile.babystr2.jpeg} alt={profile.Gabriel} className="w-full h-40 object-cover" />
        <img src={profile.babystr3.jpeg} alt={profile.Peter} className="w-full h-40 object-cover" />
        <img src={profile.urgent1.jpeg} alt={profile.Elizabeth} className="w-full h-40 object-cover" />
        <img src={profile.urgent2.jpeg} alt={profile.Dominic} className="w-full h-40 object-cover" />
        <img src={profile.urgent3.jpeg} alt={profile.Joyce} className="w-full h-40 object-cover" />
        <div className="p-4">
        <h3 className="font-semi-bold text-lg">{profile.name}</h3>
        <p className="text-sm text-gray-600">{profile.role}</p>
        <p className="text-sm text-gray-600">Experience: {profile.eperience}</p>
        <p className="text-yellow-600">{profile.rating}</p>

        </div> 
    </div>
  );
}

export default ProfileCard
