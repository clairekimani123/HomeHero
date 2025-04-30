import React from 'react'

const ProfileCard = () => {
  return (
    <div className="bg-white rounded shadow overflow-hidden transition hover:shadow-lg">
        <img src={profile.image} alt={profile.name} className="w-full h-40 object-cover" />
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
