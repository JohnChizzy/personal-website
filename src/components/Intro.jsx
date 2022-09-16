import React,{useState, useEffect} from "react";

const { PUBLIC_URL } = process.env;

const Intro =() => {
    var date = new Date;
    var hours = date.getHours();
    const [topImage, setTopImage] = useState("");
    const [bottomImage, setBottomImage] = useState("");

    useEffect(() =>{
        if (hours >=6 && hours <= 19){
            setTopImage("./image/Daylight.png");
            setBottomImage("./image/Daylight.png");
        } else{
            setTopImage("./image/Night2.png");
            setBottomImage("./image/Night.png");
        }
    });

    return(
        <div>
            <div className="Top-container"> 
        
                <span className="ctimer2" >
                    <h2 className="time time2"></h2>
                    <h6 className="greeting greeting2"></h6>
                </span>
                <div className= "tcontainer">
                    <img className="Top-cloud" src={topImage} alt="cloud-img"/>
                    <h1 className="name">I'm</h1>
                    <h1 className="name">John.</h1>
                    <h2 className="name">a programmer.</h2> 
                    <img class="Bottom-cloud" src={bottomImage}  alt="cloud-img"/> 
                    <img className="mountain"  src= "./image/mountain.png" alt="mountain-img"/>  
                </div>
            </div>
            <div className="middle-container">
                <div className="profile">
                <img className="my_pics" src="./image/me.jpg" alt="my-picture" width="304"height="304"/>
                <h2>Hello.</h2>
                <p className="intro-1 touch" >I'm a programmer,experience as a web full stack developer and a python developer. I believe in a world of limitless possibilities!!! I do love to create it for you on web and mobile.</p>
                <p className="intro-1 touch" >I'm a professional Geologist and a Fullstack Developer.. </p>
                </div>
            </div>
        </div>   
    
    );
};

export default Intro;