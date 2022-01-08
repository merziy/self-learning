import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;
  const clickHandler = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => clickHandler(author)}>
        console.log Author
      </button>
    </article>
  );
};

export default Book;
