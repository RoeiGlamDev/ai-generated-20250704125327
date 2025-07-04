// pages/index.js
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Next.js Sentry Example</h1>
      <Image
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Close-up of a computer screen displaying programming code in a dark environment."
        width={940}
        height={650}
      />
      <Image
        src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="A contemporary office desk setup with laptops, gadgets, and accessories, creating a tech-savvy workplace."
        width={940}
        height={650}
      />
      <Image
        src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Detailed image of a server rack with glowing lights in a modern data center."
        width={940}
        height={650}
      />
      <video
        src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
        poster="https://images.pexels.com/videos/3129671/free-video-3129671.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
        width={1920}
        height={1080}
        controls
      />
    </div>
  );
};

export default HomePage;