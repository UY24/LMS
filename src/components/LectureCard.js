import React from 'react';
import { Link } from 'react-router-dom';
import './LectureCard.css';

const LectureCard = ({ lecture }) => {
  return (
    <Link to={`/lecturePage/${lecture.id}`} className="lecture-card">
      <h3>{lecture.title}</h3>
      <button>Play Now</button>
    </Link>
  );
};

export default LectureCard;
