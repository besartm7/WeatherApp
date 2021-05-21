import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";

import classes from './SidebarToday.module.css'

function SibebarToday({ today, weather, converterCtoF, onChangeSidebar }) {
  const router = useRouter();

  return (
    <div className="sidebar side-today space-evenly">
      <div className="side_control">
        <Button style={"btn btn-default"} action={onChangeSidebar}>Seach Location</Button>
        <Button style={"btn btn-circle"} action={() => router.push("/")}><span className="material-icons">my_location</span></Button>
      </div>
      <div className={classes.today_img}>
        <Image
          src={`https://www.metaweather.com/static/img/weather/png/${today.weather_state_abbr}.png`}
          alt="img"
          width={200}
          height={200}
        />
      </div>
      <div className={classes.today_temp}>
        <h1>
          {!converterCtoF
            ? Math.trunc(today.the_temp)
            : Math.trunc(today.the_temp * (9 / 5) + 32)}
          <i>{!converterCtoF ? "°C" : "°F"}</i>
        </h1>
      </div>
      <div className={classes.today_weather_state}>
        <h2>{today.weather_state_name}</h2>
      </div>
      <div className={classes.today_date}>
        <p>
          Today -{" "}
          {new Date(`${today.applicable_date}`).toDateString().substr(0, 10)}
        </p>
      </div>
      <div className={classes.today_location}>
        <p>
          <span className="material-icons">location_on</span>
        </p>
        <p>{weather.title}</p>
      </div>
    </div>
  );
}

export default SibebarToday;
