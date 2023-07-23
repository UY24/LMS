import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './LecturePage.css'; // Import the CSS file for styling

const LecturePage = () => {
  const lectureId = useParams().id;

  const lectures = {
    1: {
      id: 1,
      title: "Python Lecture-1",
      videoUrl: "https://www.youtube.com/",
    },
    2: {
      id: 2,
      title: "Python Lecture-2",
      videoUrl: "https://www.youtube.com/",
    },
    3: {
      id: 3,
      title: "Python Lecture-3",
      videoUrl: "https://www.youtube.com/",
    },
    4: {
      id: 4,
      title: "React JS Lecture-1",
      videoUrl: "https://www.youtube.com/",
    },
    5: {
      id: 5,
      title: "React JS Lecture-2",
      videoUrl: "https://www.youtube.com/",
    },
    6: {
      id: 6,
      title: "React JS Lecture-3",
      videoUrl: "https://www.youtube.com/",
    },
    7: {
      id: 7,
      title: "Java Lecture-1",
      videoUrl: "https://www.youtube.com/",
    },
    8: {
      id: 8,
      title: "Java Lecture-2",
      videoUrl: "https://www.youtube.com/",
    },
    9: {
      id: 9,
      title: "Java Lecture-3",
      videoUrl: "https://www.youtube.com/",
    },
    10: {
      id: 10,
      title: "Communications Lecture-1",
      videoUrl: "https://www.youtube.com/",
    },
    11: {
      id: 11,
      title: "Communications Lecture-2",
      videoUrl: "https://www.youtube.com/",
    },
    12: {
      id: 12,
      title: "Communications Lecture-3",
      videoUrl: "https://www.youtube.com/",
    },
  };

  const lecture = lectures[lectureId];

  if(!lecture) {
    return <div>Lecture not found!</div>
  }

  return (
    <div className="lecture-page">
      <h1>{lecture.title}</h1>
      <div className="video-container">
        <ReactPlayer
          url={lecture.videoUrl}
          controls
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      
    </div>
  );
};

export default LecturePage;
