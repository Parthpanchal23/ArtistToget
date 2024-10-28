import React from "react";
import Heding from "../Heding";

const RecentBlog = () => {
  const blogs = [
    {
      title: "  16 Ridiculously Easy Ways to Find & Keep a Remote Job",
      tag: "Tips",
      content:
        "Distinctively reengineer revolutionary meta-services and premium architectures intuitive opportunities.",
      img: {
        url: "./images/blog-01a.jpg",
        original: "./images/blog-01a.jpg",
        tumbnail: "./images/blog-01a.jpg",
      },
      created_at: "22 July 2018",
    },
    {
        title: 'How to "Woo" a Recruiter and Land Your Dream Job',
        tag: "Recruiting",
        content:
          " Appropriately empower dynamic leadership skills afterbusiness portals. Globally myocardinate interactive.",
        img: {
          url: "./images/blog-02a.jpg",
          original: "./images/blog-02a.jpg",
          tumbnail: "./images/blog-02a.jpg",
        },
        created_at: "29 June 2018",
      },
      {
        title: "11 Tips to Help You Get New Clients Through Cold Calling",
        tag: "Marketing",
        content:
          " Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.",
        img: {
          url: "./images/blog-03a.jpg",
          original: "./images/blog-03a.jpg",
          tumbnail: "./images/blog-03a.jpg",
        },
        created_at: "10 June 2018",
      }
  ];
  return (
    <div className="section padding-top-65 padding-bottom-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <Heding title="From The Blog">
              <a href="pages-blog.html" className="headline-link">
                View Blog
              </a>
            </Heding>

            <div className="row">
                {blogs.map((item,i)=>(<div className="col-xl-4 col-md-6 col-sm-12" key={i}>
                <a
                  href="pages-blog-post.html"
                  className="blog-compact-item-container"
                >
                  <div className="blog-compact-item">
                    <img src={item.img.original} alt={item.title} />
                    <span className="blog-item-tag">Tips</span>
                    <div className="blog-compact-item-content">
                      <ul className="blog-post-tags">
                        <li>22 July {item.created_at}</li>
                      </ul>
                      <h3>{item.title}
                      </h3>
                      <p>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </a>
              </div>))}
              

            

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
