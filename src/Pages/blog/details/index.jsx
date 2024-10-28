import React from 'react';
import CommentForm from '../../../components/Form/CommentForm';
import RightContent from "../details/RightContent/index";
const BlogDetails = () =>{
    return (<React.Fragment>
    <div id="titlebar" className="gradient">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Blog</h2>
                    <span>Blog Post Page</span>
    
                    <nav id="breadcrumbs" className="dark">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Blog</a></li>
                            <li>Blog Post</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container">
        <div className="row">
            
            <div className="col-xl-8 col-lg-8">
                <div className="blog-post single-post">
    
                    <div className="blog-post-thumbnail">
                        <div className="blog-post-thumbnail-inner">
                            <span className="blog-item-tag">Tips</span>
                            <img src="images/blog-04.jpg" alt=""/>
                        </div>
                    </div>
    
                    <div className="blog-post-content">
                        <h3 className="margin-bottom-10">5 Myths That Prevent Job Seekers from Overcoming Failure</h3>
    
                        <div className="blog-post-info-list margin-bottom-20">
                            <a href="#" className="blog-post-info">22 July 2018</a>
                            <a href="#"  className="blog-post-info">5 Comments</a>
                        </div>
    
                        <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>
    
                        <blockquote className="margin-top-20 margin-bottom-20">
                            Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.
                        </blockquote>
    
                        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p>
    
                        <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>
    
                        <div className="share-buttons margin-top-25">
                            <div className="share-buttons-trigger"><i className="icon-feather-share-2"></i></div>
                            <div className="share-buttons-content">
                                <span>Interesting? <strong>Share It!</strong></span>
                                <ul className="share-buttons-icons">
                                    <li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
                                    <li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
                                    <li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></a></li>
                                    <li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                </div>
                
                <ul id="posts-nav" className="margin-top-0 margin-bottom-40">
                    <li className="next-post">
                        <a href="#">
                            <span>Next Post</span>
                            <strong>16 Ridiculously Easy Ways to Find & Keep a Remote Job</strong>
                        </a>
                    </li>
                    <li className="prev-post">
                        <a href="#">
                            <span>Previous Post</span>
                            <strong>11 Tips to Help You Get New Clients Through Cold Calling</strong>
                        </a>
                    </li>
                </ul>
                
                <div className="row">
                    
                    <div className="col-xl-12">
                        <h3 className="margin-top-40 margin-bottom-35">Related Posts</h3>
                    </div>
    
                    <div className="col-xl-6">
                        <a href="pages-blog-post.html" className="blog-compact-item-container">
                            <div className="blog-compact-item">
                                <img src="images/blog-02a.jpg" alt=""/>
                                <span className="blog-item-tag">Recruiting</span>
                                <div className="blog-compact-item-content">
                                    <ul className="blog-post-tags">
                                        <li>29 June 2018</li>
                                    </ul>
                                    <h3>How to "Woo" a Recruiter and Land Your Dream Job</h3>
                                    <p>Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive.</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <div className="col-xl-6">
                        <a href="pages-blog-post.html" className="blog-compact-item-container">
                            <div className="blog-compact-item">
                                <img src="images/blog-03a.jpg" alt=""/>
                                <span className="blog-item-tag">Marketing</span>
                                <div className="blog-compact-item-content">
                                    <ul className="blog-post-tags">
                                        <li>10 June 2018</li>
                                    </ul>
                                    <h3>11 Tips to Help You Get New Clients Through Cold Calling</h3>
                                    <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                    
                {/* <div className="row">
                    <div className="col-xl-12">
                        <section className="comments">
                            <h3 className="margin-top-45 margin-bottom-0">Comments <span className="comments-amount">(5)</span></h3>
    
                            <ul>
                                <li>
                                    <div className="avatar"><img src="images/user-avatar-placeholder.png" alt=""/></div>
                                    <div className="comment-content"><div className="arrow-comment"></div>
                                        <div className="comment-by">Kathy Brown<span className="date">12th, June 2018</span>
                                            <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a>
                                        </div>
                                        <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                    </div>
    
                                    <ul>
                                        <li>
                                            <div className="avatar"><img src="images/user-avatar-placeholder.png" alt=""/></div>
                                            <div className="comment-content"><div className="arrow-comment"></div>
                                                <div className="comment-by">Tom Smith<span className="date">12th, June 2018</span>
                                                    <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a>
                                                </div>
                                                <p>Rrhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="avatar"><img src="images/user-avatar-placeholder.png" alt=""/></div>
                                            <div className="comment-content"><div className="arrow-comment"></div>
                                                <div className="comment-by">Kathy Brown<span className="date">12th, June 2018</span>
                                                    <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a>
                                                </div>
                                                <p>Nam posuere tristique sem, eu ultricies tortor.</p>
                                            </div>
    
                                            <ul>
                                                <li>
                                                    <div className="avatar"><img src="images/user-avatar-placeholder.png" alt=""/></div>
                                                    <div className="comment-content"><div className="arrow-comment"></div>
                                                        <div className="comment-by">John Doe<span className="date">12th, June 2018</span>
                                                            <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a>
                                                        </div>
                                                        <p>Great template!</p>
                                                    </div>
                                                </li>
                                            </ul>
    
                                        </li>
                                    </ul>
    
                                </li>
    
                                <li>
                                    <div className="avatar"><img src="images/user-avatar-placeholder.png" alt=""/> </div>
                                    <div className="comment-content"><div className="arrow-comment"></div>
                                        <div className="comment-by">John Doe<span className="date">15th, May 2015</span>
                                            <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a>
                                        </div>
                                        <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                                    </div>
    
                                </li>
                             </ul>
    
                        </section>
                    </div>
                </div> */}
    
                {/* <div className="row">
                    <CommentForm/>
                </div> */}
    
            </div>
    
    
            <div className="col-xl-4 col-lg-4 content-left-offset">
                <RightContent/>
            </div>
    
        </div>
    </div>
    </React.Fragment>)
};

export default BlogDetails;