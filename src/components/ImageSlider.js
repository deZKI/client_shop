
import {Carousel} from "react-bootstrap";
import {MEDIA_URL} from "../utils/consts";

const ImageSlider = ({ images }) => {


  return (
      <Carousel>
        {images.map((image) => (
          <Carousel.Item>

            <img
                className="d-block w-100"
                src={`${MEDIA_URL}${image}`}/>
          </Carousel.Item>
      ))}
      </Carousel>

  );
};
export default ImageSlider