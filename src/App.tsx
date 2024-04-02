// App.tsx

import React, { useState, useEffect, useMemo } from "react";
import Courses from "././components/Courses";
import Tags from "././components/Tags";
import styles from "./App.module.scss";
import config from "./config";
import axios from "axios";

interface Course {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

const COLORS = ["#FF9966", "#F3C692", "#F1C161", "#FF9AB4", "#73DCE5"];
const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedTags, setSelectedTags] = useState<string | null>(null);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(config.BASE_URL);
      const data = response.data;
      setCourses(data);
      const allTags = data.flatMap((course: Course) => course.tags);
      const uniqueTags = ["Все темы", ...new Set(allTags)];
      setUniqueTags(uniqueTags as any);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleTagSelect = (tag: string) => {
    setSelectedTags(tag === selectedTags ? null : tag);
  };
  const getRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  };

  const filteredCourses = useMemo(() => {
    let filtered = courses;
    if (selectedTags && selectedTags !== "Все темы") {
      filtered = courses.filter((course) => course.tags.includes(selectedTags));
    }
    return filtered.map((course) => ({
      ...course,
      backgroundColor: getRandomColor(),
    }));
  }, [courses, selectedTags]);

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Tags
          tags={uniqueTags as any}
          key={courses.length}
          onTagSelect={handleTagSelect}
          selectedTags={selectedTags}
        />
      </div>
      <div className={styles.main}>
        <Courses courses={filteredCourses} />
      </div>
    </div>
  );
};

export default App;
