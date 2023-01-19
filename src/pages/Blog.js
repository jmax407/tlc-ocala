
import PostsList from '../components/Blog/PostsList'
import '../components/Blog/Blog.css'
import { useEffect } from 'react'


const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'Welcome',
    body: 'This is the 1st blog test',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    imageDescription: 'this is an image',
    date: '11:30 AM 1/4/2023'

  },
  {
    id: 'p2',
    title: 'Now',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi vitae velit blandit consectetur. Nunc eleifend condimentum risus lacinia congue. Phasellus euismod elementum risus, eget ornare purus interdum ac. Vestibulum laoreet tortor non rhoncus mollis. Nam ligula leo, commodo eget viverra id, euismod sit amet nibh. Etiam quis nibh vel est sodales vulputate eget ut nunc. Sed in libero at quam placerat molestie. Vestibulum elit libero, accumsan tempor posuere a, accumsan in nibh. Nunc in tincidunt leo, vel malesuada quam. Etiam et lorem vel enim placerat lobortis. Integer congue arcu ante, ac vestibulum est luctus vitae. Cras id rhoncus arcu. Etiam non nibh odio.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    imageDescription: 'this is an image',
    date: '11:30 AM 1/4/2023'

  }
  ,{
    id: 'p3',
    title: 'Bye',
    body: 'That blog over there is lying. this is best blog and i can prove it',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    imageDescription: 'this is an image',
    date: '11:30 AM 1/4/2023'

  }
]

const Blog = ({setIsHome, setIsGivePage}) => {
  useEffect(() => {
    setIsHome(false);
    setIsGivePage(false)
  }, []);
  return (
    <section className='py-5 container'>
      <div className="row">
        <PostsList posts={DUMMY_POSTS} />
      </div>
    </section>
  )
}

export default Blog