import thanks_img from "./tyimg.svg"

function Thanks(props){
  return(
    <div style={{display: `${props.display}`}}>
    <div className="thanks" >
      <img src = {thanks_img} alt="" style={{margin: "5px 0 15px 0 "}}/>
      <p>You selected {props.no} out of 5</p>
      <h2>Thank you!</h2>
      <div>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.</div>

    </div>
    </div>
  );

}

export default Thanks;