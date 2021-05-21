import { useState } from "react";
import Head from 'next/head'
import axios from "axios";

import SidebarToday from "../components/SidebarToday";
import SidebarSearch from "../components/SidebarSearch";
import Main from "../components/Main";

function Home(props) {
  const [showSearch, setShowSearch] = useState(false);
  const[converter, setConverter] = useState(false);

  const { weather, today, other } = props;
  

  const changeSidebar=(e)=> {
    e.preventDefault();
    setShowSearch(!showSearch);
  }

  const changeConverter=()=>{
    setConverter(!converter)
  }

  return (
    <div className='layout'>
      <Head>
        <title>Weather - {weather.title}</title>
      </Head>
      {showSearch ? (
        <SidebarSearch onChangeSidebar={changeSidebar} />
      ) : (
        <SidebarToday
          today={today}
          weather={weather}
          converterCtoF={converter}
          onChangeSidebar={changeSidebar}
        />
      )}
      <Main changeConverter={changeConverter} converter={converter} today={today} other={other} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/44418/");

  const today = await res.data.consolidated_weather[0];
  const otherDays = await res.data.consolidated_weather.filter(
    (day, i) => i !== 0
  );

  return {
    props: {
      weather: res.data,
      other: otherDays,
      today: today,
    },
    revalidate: 1800,
  };
}

export default Home;
