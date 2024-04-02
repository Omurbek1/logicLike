// Courses.tsx

import React from "react";
import Course from "./Course";
import styles from "../App.module.scss";

interface CourseProps {
  courses: {
    id: number;
    name: string;
    tags: string[];
    image: string;
    backgroundColor: string;
  }[];
}

const Courses: React.FC<CourseProps> = ({ courses }) => {
  return (
    <div className={styles.courses}>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
