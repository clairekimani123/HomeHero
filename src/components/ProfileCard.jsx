import React from 'react'

const ProfileCard = ({profile}) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden transition hover:shadow-lg">
        <img src={profile.image} alt={profile.name} className="w-full h-50 object-cover object-top
         rounded-t-md hover:scale-75 transition-transform duration-30" />
        
        <div className="p-4">
        <h3 className="font-semi-bold text-lg">{profile.name}</h3>
        <p className="text-sm text-gray-600">{profile.role}</p>
        <p className="text-sm text-gray-600">Experience: {profile.experience}</p>
        <p className="text-yellow-600">{profile.rating}</p>

        </div> 
    </div>
  );
}

export default ProfileCard
