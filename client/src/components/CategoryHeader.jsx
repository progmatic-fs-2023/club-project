function CategoryHeader(children) {
  const { categoryName } = children;

  let catImg;

  {
    switch (categoryName) {
      case 'SPORT':
        catImg = './src/assets/cat_tennis.jpg';
        break;
      case 'RECREATION':
        catImg = './src/assets/cat_tennis.jpg';
        break;
      case 'BEAUTY/RELAXATION':
        catImg = './src/assets/cat_tennis.jpg';
        break;
    }
  }

 const divStyle = {
  /*   backgroundImage: `url(${catImg})`,
    backgroundSize: "cover", */
    color: "#9e9739",
    height: "50px",
    borderBottom: "2px dotted #9e9739"
  };

  return (
    <div className="category-header" style={divStyle}>
        <h2 className="m-4">{categoryName}</h2>
    </div>
  );
}

export default CategoryHeader;