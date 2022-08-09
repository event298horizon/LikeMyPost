import React from "react";

export default function postOne(props) {
  return (
      <div className={`card container my-5 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} style={{width: '18rem'}}>
        <img src="./user.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
            <div>
          <p>{props.like} {props.like===1?'like':'likes'}</p>
          <button href="#" className="btn btn-primary mb-3" onClick={props.likeClick}>
            Like 
          </button>
          <button href="#" className="btn btn-primary mb-3 mx-2" onClick={props.disLikeClick}>
            Dislike 
          </button>
          </div>
          <h5 className="card-title">Saurabh Awasthi</h5>
          <p className="card-text">
            I'm not crazy, my mother had me tested!  ~ Sheldon Cooper
          </p>
        </div>
      </div>
  );
}
