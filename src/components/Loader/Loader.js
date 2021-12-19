const Loader = ({ show }) => {
  // if (!show) {
  //   return;
  // }

  return (
    <div className="loader_bg">
      <div className="loader">
        <img src="images/loading.gif" alt="spinning-loader" />
      </div>
    </div>
  );
};

export default Loader;
