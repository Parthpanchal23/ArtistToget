import React from "react";

const PopulerCategoriesListing = () => {
  const data = [
    { title: "Singer", total: 612,href:"/",img:"./images/job-category-01.jpg" },
    { title: "Dancer", total: 113,href:"/",img:"./images/job-category-02.jpg" },
    { title: "Painter", total: 420,href:"/",img:"./images/job-category-03.jpg" },
    { title: "Photographer", total: 900,href:"/",img:"./images/job-category-04.jpg" },
    { title: "Makupartist", total: 452,href:"/",img:"./images/job-category-05.jpg" },
    { title: "Tatoo-Artist", total: 235,href:"/",img:"./images/job-category-06.jpg" },
  ];
  return (
    <div className="section margin-top-65 margin-bottom-30">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-headline centered margin-top-0 margin-bottom-45">
              <h3>Popular Categories</h3>
            </div>
          </div>
        {data?.length && data?.map((item)=> <div className="col-xl-3 col-md-6">
            <a
              href={item.href}
              className="photo-box small"
              data-background-image={item.img}
            >
              <div className="photo-box-content">
                <h3>{item.title}</h3>
                <span>{item.total}</span>
              </div>
            </a>
          </div>)}
         

        </div>
      </div>
    </div>
  );
};

export default PopulerCategoriesListing;
