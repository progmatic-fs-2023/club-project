function CategoryHeader(children) {
  const { categoryName } = children;

  return (
    <div className="header-underline">
      <h2 className="yeseva-font mt-5 fw-bold border-bottom border-warning border-3">
        {categoryName}
      </h2>
    </div>
  );
}

export default CategoryHeader;
