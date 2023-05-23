import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-20">
      <SectionTitle
        subHeading={"---From 11.00am to 10.00pm ---"}
        heading={"order online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slider" />
          <h3 className="text-4xl uppercase text-center -mt-10">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slider" />
          <h3 className="text-4xl uppercase text-center -mt-10">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slider" />
          <h3 className="text-4xl uppercase text-center -mt-10">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slider" />
          <h3 className="text-4xl uppercase text-center -mt-10">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slider" />
          <h3 className="text-4xl uppercase text-center -mt-10">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
