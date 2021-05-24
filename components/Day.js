import Image from "next/image";

import classes from "./Day.module.css";

function Day({ day, i, converter, today }) {
  return (
    <div className="day_wrap">
      <div>
        <p>
          {i === 0
            ? "Tomorrow"
            : new Date(`${day.applicable_date}`).toDateString().substr(0, 10)}
        </p>
      </div>
      <Image
        src={`https://www.metaweather.com/static/img/weather/png/${today.weather_state_abbr}.png`}
        alt="img"
        width={50}
        height={50}
      />
      <div className={classes.day_min_max}>
        <p className={classes.max}>
          {!converter
            ? Math.trunc(day.max_temp)
            : Math.trunc(day.max_temp * (9 / 5) + 32)}
          <i>{!converter ? "°C" : "°F"}</i>
        </p>
        <p className={classes.min}>
          {!converter
            ? Math.trunc(day.min_temp)
            : Math.trunc(day.min_temp * (9 / 5) + 32)}
          <i>{!converter ? "°C" : "°F"}</i>
        </p>
      </div>
    </div>
  );
}

export default Day;
