import TextArea from '../components/TextArea';
import PostTitle from '../components/PostTitle';

const NewPost = () => {
  return (
    <div className="flex-col font-roboto-condensed">
      <PostTitle />
      <TextArea />
    </div>
  )
}

export default NewPost; 
