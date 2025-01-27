import React from 'react';

const VideoHero = () => {
  return (
    <div className="relative h-screen">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://ewxxbvbupyasgvowvxlk.supabase.co/storage/v1/object/sign/media/video/hero-video.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS92aWRlby9oZXJvLXZpZGVvLm1wNCIsImlhdCI6MTczODAxMDc4MSwiZXhwIjoxNzY5NTQ2NzgxfQ.VH3qhjPS2Tx7COXnouHgGt0wWVntTcIduk1Fy4rOPpg"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default VideoHero;