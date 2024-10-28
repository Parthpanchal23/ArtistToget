import React from "react";
import CategoriesItem from "./CategoriesItem";

const CategoriesListing = () => {
  const CatData = [
    {
      Title: "Web & Software Dev",
      SubTitle: "Software Engineer, Web / Mobile Developer & More",
      Count: 612,
      Icon: <i className="icon-line-awesome-file-code-o"></i>,
    },
    {
        Title: "Data Science & Analitycs",
        SubTitle: "Data Specialist / Scientist, Data Analyst & More",
        Count: 113,
        Icon: <i className="icon-line-awesome-cloud-upload"></i>,
    },
    {
        Title: "Accounting & Consulting",
        SubTitle: "Auditor, Accountant, Fnancial Analyst & More",
        Count: 0,
        Icon: <i className="icon-line-awesome-suitcase"></i>,
    },
    {
        Title: "Writing & Translation",
        SubTitle: "Copywriter, Creative Writer, Translator & More",
        Count: 298,
        Icon: <i className="icon-line-awesome-pencil"></i>,
    },
    {
        Title: "Sales & Marketing",
        SubTitle: "Brand Manager, Marketing Coordinator & More",
        Count: 549,
        Icon: <i className="icon-line-awesome-pie-chart"></i>,
    },
    {
        Title: "Graphics & Design",
        SubTitle: "Creative Director, Web Designer & More",
        Count: 873,
        Icon: <i className="icon-line-awesome-image"></i>,
    },
    {
        Title: "Graphics & Design",
        SubTitle: "Creative Director, Web Designer & More",
        Count: 873,
        Icon: <i className="icon-line-awesome-image"></i>,
    },
    {
        Title: "Graphics & Design",
        SubTitle: "Creative Director, Web Designer & More",
        Count: 873,
        Icon: <i className="icon-line-awesome-image"></i>,
    },
    {
        Title: "Graphics & Design",
        SubTitle: "Creative Director, Web Designer & More",
        Count: 873,
        Icon: <i className="icon-line-awesome-image"></i>,
    }
  ];
  return (
      <div className="section margin-top-65">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline centered margin-bottom-15">
                <h3>Popular Job Categories</h3>
              </div>
              <div className="categories-container">
                {CatData?.length &&CatData.map((item,i)=><CategoriesItem  key={i}data={item}/> )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CategoriesListing;
