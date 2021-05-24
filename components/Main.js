import Link from "next/link";

import Compass from "./Compass";
import classes from "./Main.module.css";
import Day from "./Day";
import Button from "./Button";

function Main({ changeConverter, converter, today, other }) {
  return (
    <div className="content">
      <div className={classes.converters}>
        <Button style={!converter ? "btn btn-circle active" : "btn btn-circle"} action={converter ? changeConverter : null}>°C</Button>
        <Button style={converter ? "btn btn-circle active" : "btn btn-circle"} action={!converter ? changeConverter : null}>°F</Button>
      </div>
      <div className="container">
        {other.map((day, i) => (
          <Day day={day} i={i} converter={converter} today={today} key={day.id} />
        ))}
      </div>
      <div className="title">
        <h1>Today’s Hightlights</h1>
      </div>
      <div className={classes.hightlights}>
        <div className="box-mondel1">
          <p className={classes.head}>Wind status</p>
          <p className={classes.body}>
            {Math.trunc(today.wind_speed)}
            <span>mph</span>
          </p>
          <div className={classes.wind}>
            <div className={classes.windDirection}>
              <Compass today={today} />
            </div>
            {today.wind_direction_compass}
          </div>
        </div>
        <div className="box-mondel1">
          <p className={classes.head}>Humidity</p>
          <p className={classes.body}>
            {today.humidity}
            <span>%</span>
          </p>
          <div className={classes.humidity_bar}>
            <div className={classes.values}>
              <i>0</i>
              <i>50</i>
              <i>100</i>
            </div>
            <div className={classes.progress_wrap}>
              <div
                className={classes.bar}
                style={{ width: `${today.humidity}%` }}
              ></div>
            </div>
            <div className={classes.percent}>
              <i>%</i>
            </div>
          </div>
        </div>

        <div className="box-mondel2">
          <p className={classes.head}>Visibility</p>
          <p className={classes.body}>
            {today.visibility.toFixed(1)}
            <span>mph</span>
          </p>
        </div>
        <div className="box-mondel2">
          <p className={classes.head}>Air Pressure</p>
          <p className={classes.body}>
            {Math.trunc(today.air_pressure)}
            <span>mb</span>
          </p>
        </div>
      </div>
      <div className="footer">
        <p>
          created by{" "}
          <Link href="https://www.linkedin.com/in/besartm/">besartm</Link> -{" "}
          <Link href="https://devchallenges.io">devChallenges.io</Link>
        </p>
      </div>
    </div>
  );
}

export default Main;
