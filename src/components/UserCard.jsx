import { useState } from 'react';

const UserCard = ({ user }) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState('');
  
  if (!user) return null;

  const { firstName, lastName, email, gender, photoUrl, _id } = user;

  const handleSwipe = (direction) => {
    setIsSwiped(true);
    setSwipeDirection(direction);
    setTimeout(() => {
      setIsSwiped(false);
      setSwipeDirection('');
    }, 300);
  };

  const getGenderIcon = () => {
    return gender === 'male' ? '👨' : gender === 'female' ? '👩' : '👤';
  };

  return (
    <div className="relative w-80 h-96 max-w-sm mx-auto">
      {/* Card Container */}
      <div
        className={`
          absolute inset-0  rounded-2xl shadow-2xl overflow-hidden
          transition-all duration-300 ease-out cursor-pointer
          hover:shadow-3xl transform hover:scale-105
          ${isSwiped ? (swipeDirection === 'right' ? 'translate-x-full rotate-12 opacity-0' : '-translate-x-full -rotate-12 opacity-0') : 'translate-x-0 rotate-0 opacity-100'}
        `}
        onTouchStart={(e) => {
          const touchStart = e.touches[0].clientX;
          const handleTouchEnd = (e) => {
            const touchEnd = e.changedTouches[0].clientX;
            const diff = touchStart - touchEnd;
            if (Math.abs(diff) > 50) {
              handleSwipe(diff > 0 ? 'left' : 'right');
            }
            document.removeEventListener('touchend', handleTouchEnd);
          };
          document.addEventListener('touchend', handleTouchEnd);
        }}
      >
        {/* User Photo */}
        <div className="relative h-3/5 bg-linear-to-br from-pink-400 to-purple-600">
          {photoUrl ? (
            <img 
              src={photoUrl} 
              alt={`${firstName} ${lastName}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-8xl text-white/80">
                {getGenderIcon()}
              </div>
            </div>
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Age and Name Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-3xl font-bold drop-shadow-lg">
              {firstName} {lastName}
            </h2>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <span>{gender}</span>
              <span>•</span>
              <span>{getGenderIcon()}</span>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="p-4 bg-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm truncate">{email}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm">ID: {_id?.slice(-6) || 'Unknown'}</span>
            </div>
          </div>
        </div>

        {/* Swipe Indicators */}
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 transition-opacity duration-200 hover:opacity-100">
          ✓ LIKE
        </div>
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 transition-opacity duration-200 hover:opacity-100">
          ✗ PASS
        </div>
      </div>

      {/* Swipe Hint */}
      <div className="absolute -bottom-8 left-0 right-0 text-center text-gray-500 text-sm">
        Swipe right to like • Swipe left to pass
      </div>
    </div>
  );
};

export default UserCard;