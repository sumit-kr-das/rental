import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Hotel/ListContainer/listContainer.scss'

const Error = () => {
  return (
    <div>
        <div className="not_found">
					<img src="/assets/search_not_found.jpg" alt="search_404" />
					<p>Oops! Look like you're lost <Link to="/">Back to the home</Link></p>
				</div>
    </div>
  )
}

export default Error