import React from 'react'
import { Link } from 'gatsby'
// import BlogSidebar from './BlogSidebar'
// import img6 from '../../assets/images/blog/blog-img6.jpg'

const BlogLayoutContent = (props) => {
    // console.log(props)
    return (
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="blog-details-desc">

                            {props.pageContext.frontmatter.featuredImage
                                ? <div className="article-image mb-5">
                                    <img src={props.pageContext.frontmatter.featuredImage} alt="Featured" />
                                </div>
                                : ""}


                            <div className="article-content mt-0">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category</span>
                                            {props.pageContext.frontmatter.category}
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Published</span>
                                            {new Date(props.pageContext.frontmatter.date).toDateString()}
                                        </li>
                                        {/* <li>
                                            <i className='bx bx-group'></i>
                                            <span>View</span>
                                            <Link to="#">
                                                813,454
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>

                                {props.children}

                            </div>

                            <div className="article-footer">
                                <div className="article-tags">
                                    <span><i className='bx bx-purchase-tag'></i></span>
                                    {props.pageContext.frontmatter.tags.map((tag, i) => {
                                        return <Link to="#" key={i} onClick={(e) => { e.preventDefault() }}>{tag}</Link>
                                    })}

                                </div>

                                <div className="article-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li>
                                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${`https://techna.pk/blog${props.pageContext.frontmatter.path}`}`} className="facebook">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://twitter.com/intent/tweet?url=${`https://techna.pk/blog${props.pageContext.frontmatter.path}`}&text=${props.pageContext.frontmatter.title}`} className="twitter">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${`https://techna.pk/blog${props.pageContext.frontmatter.path}`}`} className="linkedin">
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                        {/* <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div> */}
                </div>
            </div>
        </section>
    )
}

export default BlogLayoutContent