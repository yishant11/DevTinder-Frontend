import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, email, gender, photoUrl,age } = user;

  const getGenderIcon = () => {
    return gender === "male" ? "👨" : gender === "female" ? "👩" : "👤";
  };

  return (
    <div className="w-80 max-w-sm mx-auto rounded-xl shadow-md overflow-hidden bg-white">
      
      {/* User Photo */}
      <div className="h-56 bg-gray-200">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {getGenderIcon()}
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="p-4">
        <h2 className="text-xl text-violet-700 font-semibold">
          {firstName} {lastName}
        </h2>

        <p className="text-sm text-blue-500 mt-1">
          {gender} {getGenderIcon()}
        </p>

        <p className="text-sm text-blue-600 mt-2 break-all">
          {email}
        </p>
        
        <p className="text-sm text-blue-600 mt-2 break-all">
          {age}
        </p>
      </div>

    </div>
  );
};

export default UserCard;