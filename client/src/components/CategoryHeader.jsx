function CategoryHeader(children) {
  const { categoryName } = children;
  
  const divStyle = {
       color: '#9e9739',
    height: '50px',
    borderBottom: '2px dotted #9e9739',
  };

  return (
    <div className="category-header" style={divStyle}>
      <h2 className="m-4">{categoryName}</h2>
    </div>
  );
}

export default CategoryHeader;
