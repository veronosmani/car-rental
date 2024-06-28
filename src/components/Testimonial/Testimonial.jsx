const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adoposcing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adoposcing elit.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adoposcing elit.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black bg-slate-100 dark:text-white py-14 sm:pb-24">
      <div className="container">
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {testimonialData.map((data) => {
            return (
              <div key={data.name}>
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/id/237/200"
                    className="h-20 w-20 rounded-full"
                    alt=""
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{data.description}</p>
                <p className="font-semibold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
