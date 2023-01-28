import Carousel from 'react-bootstrap/Carousel';
import img8 from './images/img8.jpeg'
import img9 from './images/img9.jpeg'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img8}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img9}
          alt="Second slide"
        />

       
      </Carousel.Item>
          </Carousel>
  );
}

export default UncontrolledExample;