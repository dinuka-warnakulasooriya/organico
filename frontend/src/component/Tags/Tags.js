import React from 'react';
import { Link } from 'react-router-dom';
import classes from './tags.module.css';

export default function Tags({ tags, forFoodPage }) {
  // Ensure tags is an array
  const tagArray = Array.isArray(tags) ? tags : [];

  return (
    <div
      className={classes.container}
      style={{
        alignItems: forFoodPage ? 'flex-start' : 'center',
      }}
    >
      {tagArray.map(tag => (
        <Link key={tag.name} to={`/tag/${tag.name}`}>
          {tag.name}
          {!forFoodPage && <span>({tag.count})</span>}
        </Link>
      ))}
    </div>
  );
}
