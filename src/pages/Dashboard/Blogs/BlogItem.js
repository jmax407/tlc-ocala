import React from 'react'
import  {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
const BlogItem = ({id, title, body, date}) => {
    let bodyPreview = body.slice(0,75)
    bodyPreview = bodyPreview + '...'
    
  return (
    <>
    <tr>
              <td>
                <Link>{title}</Link>
              </td>
              <td>
                <Link>
                  { bodyPreview}
                </Link>
              </td>
              <td>{date}</td>
              <td>
                <Button variant='link me-1'>
                  <i className='fa-solid fa-pencil'></i>
                </Button>
                <Button variant='link'>
                  <i className='fa-solid fa-trash-can'></i>
                </Button>
              </td>
            </tr>
    </>
  )
}

export default BlogItem