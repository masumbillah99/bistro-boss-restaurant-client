import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"---What Our Client Say---"}
        heading={"testimonials"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="flex flex-col items-center gap-10 my-12 mx-24">
              <Rating
                style={{ maxWidth: 250 }}
                value={review?.rating}
                readOnly
              />
              <FaQuoteLeft className="text-7xl" />
              <p>{review?.details}</p>
              <h3 className="text-2xl uppercase text-orange-400">
                {review?.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
