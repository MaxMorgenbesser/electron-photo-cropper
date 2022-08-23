import { Link } from 'react-router-dom';
import Photo from './Photo';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <h1>My Photo Cropper</h1>
        <Link to="/photo">
          <Photo/>
          <button type="button">Photo</button>
        </Link>
      </div>
    </div>
  );
};

export default Hello;
