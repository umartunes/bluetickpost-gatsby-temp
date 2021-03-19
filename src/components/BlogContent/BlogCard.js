import React from 'react'
import { Link } from 'gatsby'

// Blog Items coming from index file, using graphql query
const BlogCard = (props) => {

    console.log(props)
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    {props.data?.allMdx?.edges?.map((blogItem, i) => {

                        // console.log(blogItem)

                        return <div key={blogItem.node.id} className="col-lg-4 col-md-6">
                            <div className="single-blog-post bg-fffbf5">
                                <div className="post-image">
                                    <Link to={`/blog${blogItem.node.frontmatter.path}`}>
                                        <img src={blogItem.node.frontmatter.featuredImage} alt={blogItem.node.frontmatter.title} />
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src={blogItem.node.frontmatter.authorImage} className="rounded-circle" alt="image_alt" />
                                                <span>{blogItem.node.frontmatter.author}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> {new Date(blogItem.node.frontmatter.date).toDateString()}
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to={`/blog${blogItem.node.frontmatter.path}`}>
                                            {blogItem.node.frontmatter.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                    })}

                    <div className="col-lg-12 col-md-12">
                        {/* Pagination */}
                        <div className="pagination-area text-center">
                            <Link to="#" className="prev page-numbers">
                                <i className='bx bx-chevrons-left'></i>
                            </Link>
                            <span className="page-numbers current" aria-current="page">1</span>
                            <Link to="#" className="page-numbers">
                                2
                            </Link>
                            <Link to="#" className="page-numbers">
                                3
                            </Link>
                            <Link to="#" className="page-numbers">
                                4
                            </Link>
                            <Link to="#" className="next page-numbers">
                                <i className='bx bx-chevrons-right'></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogCard