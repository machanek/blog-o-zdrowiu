import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'
import 'dayjs/locale/pl'
import * as dayjs from 'dayjs'
class Post extends React.Component {
  showDate(value, format) {
    return dayjs(value).locale('pl').format(format)
  }
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    const { slug, categorySlug } = this.props.data.node.fields

    return (
      <div className="post">
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={this.showDate(date, 'MMMM D, YYYY')}
          >
            {this.showDate(date, 'MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>
          Czytaj
        </Link>
      </div>
    )
  }
}

export default Post
