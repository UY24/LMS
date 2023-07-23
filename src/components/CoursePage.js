import React from "react";
import { useParams } from "react-router-dom";
import LectureCard from "./LectureCard";
import "./CoursePage.css";

const CoursePage = () => {
  const courseData = {
    1: {
      title: "Python",
      author: "Free Code Camp",
      lectures: [
        {
          id: 1,
          title: "Lecture 1",
          videoUrl: "https://youtu.be/vLqTf2b6GZw",
        },
        {
          id: 2,
          title: "Lecture 2",
          videoUrl: "https://youtu.be/rfscVS0vtbw",
        },
        {
          id: 3,
          title: "Lecture 3",
          videoUrl: "https://youtu.be/kqtD5dpn9C8",
        },
      ],
    },
    2: {
      title: "React JS",
      author: "Free Code Camp",
      lectures: [
        {
          id: 4,
          title: "Lecture 1",
          videoUrl: "https://youtu.be/bMknfKXIFA8",
        },
        {
          id: 5,
          title: "Lecture 2",
          videoUrl: "https://youtu.be/w7ejDZ8SWv8",
        },
        {
          id: 6,
          title: "Lecture 3",
          videoUrl: "https://youtu.be/Ke90Tje7VS0",
        },
      ],
    },
    3: {
      title: "Java",
      author: "Free Code Camp",
      lectures: [
        {
          id: 7,
          title: "Lecture 1",
          videoUrl: "https://youtu.be/eIrMbAQSU34",
        },
        {
          id: 8,
          title: "Lecture 2",
          videoUrl: "https://youtu.be/A74TOX803D0",
        },
        {
          id: 9,
          title: "Lecture 3",
          videoUrl: "https://youtu.be/UmnCZ7-9yDY",
        },
      ],
    },
    4: {
      title: "Communications",
      author: "Free Code Camp",
      lectures: [
        {
          id: 10,
          title: "Lecture 1",
          videoUrl: "https://youtu.be/UmnCZ7-9yDY",
        },
        {
          id: 11,
          title: "Lecture 2",
          videoUrl:
            "https://youtube.com/playlist?list=PL9RcWoqXmzaKWxaNoDhW4O1kA0hK9AYys",
        },
        {
          id: 12,
          title: "Lecture 3",
          videoUrl: "https://youtu.be/HAnw168huqA",
        },
      ],
    },
  };

  const course = courseData[useParams().id];

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="course-container">
      <div className="course-page">
        <h1>{course.title}</h1>
        <p>Author: {course.author}</p>
        <h2>Lectures</h2>
        <div className="lecture-list">
          {course.lectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
