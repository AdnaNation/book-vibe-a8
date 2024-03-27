import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleViewList = () => {
    navigate("/listed");
  };
  return (
    <div className="hero min-h-96 bg-base-200 md:p-16 rounded-lg mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="h-60 md:h-80"
          src={"https://i.ibb.co/gF6CJQK/banner-book.png"}
        />
        <div className="max-w-lg text-center md:text-left space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button
            onClick={handleViewList}
            className="btn bg-[#23BE0A] text-white"
          >
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
