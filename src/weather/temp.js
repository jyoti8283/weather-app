import React, { useEffect, useState } from "react";
import Weathercard from "./Weathercard";
import "./style.css";


 const Temp = () => {
     const [searchValues, setsearchvalue] = useState("pune");
     const [tempinfo, setTempInfo] =  useState ({});

     const getwatherInfo = async () =>{
         try{
             let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValues}&units=metric&appid=b8759c4f1309e005ee9e16394980af13`;

             const res =  await fetch(url);
             const data = await res.json();
            //  console.log(data);

            const { temp, humidity, pressure} = data.main;
            const { main : weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherinfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,

            };
            setTempInfo(myNewWeatherinfo);


         }
         catch(error){
             console.log(error);
         }
     };
      useEffect(() => {
          getwatherInfo();
      }, []);






     return (
         <>
         <div className="wrap">
         <div className="search">
             <input type="search"
             placeholder="search....."
             autoFocus
             id="search"
             className="searchTerm"
             value = { searchValues}
             onChange={(e) =>  setsearchvalue(e.target.value)}
             />
              <button className="searchButton" type="button" onClick={getwatherInfo}>search</button>

         </div>

         </div>
         <Weathercard tempinfo={tempinfo}/>

{/* <article className="widget">
<div className="weatherIcon">
<i className={"wi wi-day-sunny"}></i>

</div>
<div className="weatherInfo">
    <div className="temperature">
    <span>25.5&deg;</span>
    </div>

<div className="description">
    <div className="weatherCondition">
        sunny
    </div>
    <div className="place">
        pune, india
    </div>
</div>
</div>

<div className="date"> {new Date().toLocaleString()}</div>
<div className="extra-temp">
    <div className="temp-info-minmax">
        <div className="two-sided-section">
        <p>
            <i className={"wi wi-sunset"}></i>

        </p>
        <p className="extra-info-leftside" >
        19:19 pm
<br />
sunset
        </p>

        </div>
        <div className="two-sided-section">
        <p>
            <i className={"wi wi-humidity"}></i>

        </p>
        <p className="extra-info-leftside" >
        19:19 pm
<br />
humidity
        </p>

        </div>
    </div>

    <div className="weather-extra-info">
    <div className="two-sided-section">
        <p>
            <i className={"wi wi-rain"}></i>

        </p>
        <p className="extra-info-leftside" >
        19:19 pm
<br />
pressure
        </p>

        </div>
        <div className="two-sided-section">
        <p>
            <i className={"wi wi-strong-wind"}></i>

        </p>
        <p className="extra-info-leftside" >
        19:19 pm
<br />
speed
        </p>

        </div>

    </div>
</div>




</article> */}

     </>
     )
 }
 export default Temp