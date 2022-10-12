import "./../media/css/AppHeader.css";
const AppHeaderMenu = () => {
  return (
    <div>
      <span>manage history</span>
      <span>change other roulette </span>
      <span>create other session</span>
      <span>create other roulette</span>
      <span>close roulette</span>
      <span>logout</span>
    </div>
  );
};
const AppHeader = () => {
  // pass button actions to home component
  return (
    <div className="a-h">
      <div className="a-h-1">
        <div>
          <input type={"text"} />
          <button>add</button>
        </div>

        <button>settigns</button>
        {/* open options
         * maange history
         * change other roulette
         * create otehr session
         * create other roulette
         * close roulette
         * user setting
         * logout
         */}
      </div>
      <div className="sessions-algs">
        <span>session 1</span>
        <span>session 2</span>
        <span>session 3</span>
        <span>session 4</span>
      </div>
      <div className="fav-algs">
        <span>alg 1 name </span>
        <span>alg 2 name </span>
        <span>alg 1 name </span>
        <span>alg 3 name </span>
      </div>
      <div className="nums-history">
        <span>1</span>
        <span>30</span>
        <span>20</span>
        <span>13</span>
      </div>
    </div>
  );
};

export default AppHeader;
