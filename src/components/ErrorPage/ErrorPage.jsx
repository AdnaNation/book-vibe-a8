import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-40 space-y-6 text-4xl font-bold">
      <h2>Oops!!!</h2>
      <h3>This page is still being Cooked.</h3>
      <Link to="/">
        <a className="btn">Go Back to Home</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
