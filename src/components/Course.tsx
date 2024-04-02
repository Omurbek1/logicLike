// Course.tsx

import React from "react";
import styles from "../App.module.scss";

interface CourseProps {
  course: {
    id: number;
    name: string;
    image: any;
    backgroundColor: string;
  };
}

const Course: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className={styles.course} style={{ backgroundColor: course.backgroundColor }}>
      <img src={course.image} alt={course.image} />
      <div className={styles.title}>{course.name}</div>
    </div>
  );
};

export default Course;
