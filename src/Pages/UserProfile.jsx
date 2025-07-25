import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../Context/UserContext';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-[86.5vh] flex items-center justify-center">
        <p className="text-gray-600 text-lg">Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[86.5vh] flex items-center justify-center bg-zinc-300 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-zinc-800">Your Profile</h2>

        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-zinc-300 flex items-center justify-center text-3xl font-bold text-white">
            {user.name[0].toUpperCase()}
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl font-semibold text-zinc-800">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 text-center">
          <button
            onClick={() => {
              localStorage.removeItem("currentUser");
              window.location.reload();
            }}
            className="mt-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
