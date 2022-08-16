import { useEffect, useState } from "react";
import star from "./icon-star.svg"
import "../App.css"
import Thanks from "./thanks"

let key = 0;


function Rating(props){
  const [display, setDisplay] = useState(`${props.display}`);
  const [displayThanks, setDisplayThanks] = useState("none");

  function clickHandler(){
    setDisplay("none");
    setDisplayThanks("block");
  }

  function ratingActive(e){
    const all_btns = document.getElementsByClassName("hv");
    for(let i=0; i<5; i++){
      all_btns[i].style.backgroundColor = "rgb(38, 47, 56)";
    }
    if(e.target.style.backgroundColor === "" || e.target.style.backgroundColor ==="rgb(38, 47, 56)"){
      e.target.style.backgroundColor = "#7d8798";
      key = e.target.innerHTML;
      console.log(key);
    }
    else{
      e.target.style.backgroundColor = "#262f38";
    }
  }


  return(
    <>
    <div className="rating" style={{display: `${display}`}}>
      <div className="round" style={{padding:"17px 0 0 0", }}> <img src={star} alt=""/></div>
      <h3 style={{fontSize: "20px", margin: "50px 0 0 0", fontWeight: "600"}}> How did we do? </h3>

      <div style={{fontWeight: "200", margin: "20px 0 30px 0", lineHeight: "25px"}}> Please let us know how we did with your support request. All feedback is appreciateed to help us imrpove our offering</div>

      <div style={{display:"flex", justifyContent:"space-between"}}>
      <button className="round hv" onClick={ratingActive}>1</button>
      <button className="round hv" onClick={ratingActive}>2</button>
      <button className="round hv" onClick={ratingActive}>3</button>
      <button className="round hv" onClick={ratingActive}>4</button>
      <button className="round hv" onClick={ratingActive}>5</button>
      </div>

      <button className="btn" onClick = {clickHandler}> SUBMIT </button> 
    </div>

    <Thanks no={key} display={displayThanks}/>

    </>

  );
}


export default Rating;
