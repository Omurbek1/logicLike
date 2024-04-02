// Tags.tsx

import React from "react";
import styles from "../App.module.scss";

interface TagProps {
  tags: string[];
  onTagSelect: (tag: string) => void;
  selectedTags: string | null;
}

const Tags: React.FC<TagProps> = ({ tags, onTagSelect, selectedTags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <button
          key={`${tag}-${index}`}
          className={styles.tagButton}
          onClick={() => onTagSelect(tag)}
          style={
            selectedTags === tag
              ? { color: "#fff", backgroundColor: "#5FBF77" }
              : {}
          }
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
