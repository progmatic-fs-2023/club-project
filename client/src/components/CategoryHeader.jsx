function CategoryHeader(children) {
  const { categoryName } = children;

  return (
    <div className="category-header">
      <h2
        className="mt-5 fw-bold border-bottom border-warning border-3"
        style={{ fontFamily: "'Yeseva One', cursive" }}
      >
        {categoryName}
      </h2>
    </div>
  );
}

export default CategoryHeader;
