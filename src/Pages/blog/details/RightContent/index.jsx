import React from 'react'

const index = () => {
    const TrendingData=[{
        id:"i1",
        Title:`How to "Woo" a Recruiter and Land Your Dream Job`,
        image:"images/blog-02a.jpg",
        href:"#",
        createdAt:"29 June 2018",
        isActive:true
    },
    {
        id:"i2",
        Title:"What It Really Takes to Make $100k Before You Turn 30",
        image:"images/blog-07a.jpg",
        href:"#",
        createdAt:"3 June 2018",
        isActive:false
    },
    {
        id:"i3",
        Title:"5 Myths That Prevent Job Seekers from Overcoming Failure",
        image:"images/blog-04a.jpg",
        href:"#",
        createdAt:"5 June 2018",
        isActive:false
    }];

  return (
    <div className="sidebar-container">
                    
        <div className="sidebar-widget margin-bottom-40 ">
            <div className="input-with-icon">
                <input id="autocomplete-input" type="text" placeholder="Search"/>
                <i className="icon-material-outline-search"></i>
            </div>
        </div>

        <div className="sidebar-widget">

            <h3>Trending Posts</h3>
            <ul className="widget-tabs">
            {TrendingData.map((item,j)=>(<li>
                    <a href={item?.href} className={`widget-content ${item?.isActive ? 'active':""}`}>
                        <img src={item.image} alt={item.Title}/>
                        <div className="widget-text">
                            <h5>{item.Title}</h5>
                            <span>{item.createdAt}</span>
                        </div>
                    </a>
                </li>))}
            </ul>

        </div>


        <div className="sidebar-widget">
            <h3>Social Profiles</h3>
            <div className="freelancer-socials margin-top-25">
                <ul>
                    <li><a href="#" title="Dribbble" data-tippy-placement="top"><i className="icon-brand-dribbble"></i></a></li>
                    <li><a href="#" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
                    <li><a href="#" title="Behance" data-tippy-placement="top"><i className="icon-brand-behance"></i></a></li>
                    <li><a href="#" title="GitHub" data-tippy-placement="top"><i className="icon-brand-github"></i></a></li>
                </ul>
            </div>
        </div>

        <div className="sidebar-widget">
            <h3>Tags</h3>
            <div className="task-tags">
                <a href="#"><span>employer</span></a>
                <a href="#"><span>recruiting</span></a>
                <a href="#"><span>work</span></a>
                <a href="#"><span>salary</span></a>
                <a href="#"><span>tips</span></a>
                <a href="#"><span>income</span></a>
                <a href="#"><span>application</span></a>
            </div>
        </div>
    </div>
  )
}

export default index