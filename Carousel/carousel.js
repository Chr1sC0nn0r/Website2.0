import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../src/photo1.jpg';
import img2 from '../../src/photo2.jpg';
import img3 from '../../src/photo3.jpg';
import img4 from '../../src/photo4.jpg';
import img5 from '../../src/photo5.jpg';
import img6 from '../../src/photo6.jpg';
import img7 from '../../src/photo7.jpg';
import img8 from '../../src/photo8.jpg';


function MyCarousel() {
  return (
    <div>
    <Carousel className='carousel-box'>
      <Carousel.Item>
        <div>
        <img 
        className='d-block w-100'
        src={img1} 
        alt='First Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3 >First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={img2} 
        alt='Second Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={img3} 
        alt='Third Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={img4} 
        alt='Fourth Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={img5} 
        alt='Fifth Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={img6} 
        alt='Sixth Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={img7} 
        alt='Seventh Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        src={img8} 
        alt='Eighth Slide'
        style={{
          width: "50%",
          height: "420px"
        }} 
        />
        <Carousel.Caption>
          <h3>Eighth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MyCarousel;