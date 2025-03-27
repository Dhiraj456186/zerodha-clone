import React from "react";

function Universe() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{maxWidth:"40%"}}/>
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{maxWidth:"40%"}}/>
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{maxWidth:"40%"}}/>
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{maxWidth:"40%"}}/>
          <p className="text-small text-muted">Asset management.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{maxWidth:"40%"}}/>
          <p className="text-small text-muted">Bonds trading platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{maxWidth:"40%"}}/>
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"15%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
