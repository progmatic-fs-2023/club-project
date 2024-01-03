function CategoryHeader(children) {
  const { categoryName } = children;

  const divStyle = {
    color: '#0d2241',
    maxWidth: '60px',
    borderBottom: '3px solid #a5a51e',
  };

  return (
    <div className="category-header" style={divStyle}>
      <h2 className="mt-5" style={{ fontFamily: "'Yeseva One', cursive", fontWeight: 900 }}>
        {categoryName}
      </h2>
    </div>
  );
}

export default CategoryHeader;
