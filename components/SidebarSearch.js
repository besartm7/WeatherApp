import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import classes from "./SidebarSearch.module.css";
import Button from "./Button";

function SidebarSearch({ onChangeSidebar }) {
  const [querySearch, setQuerySearch] = useState("");
  const [goSearch, setGoSearch] = useState(false);
  const [result, setResult] = useState();

  useEffect(() => {
    if (goSearch && querySearch !== "") {
      const fetchData = async () => {
        const data = await axios(
          `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${querySearch}`
        );
        setResult(data);
      };
      fetchData();
      setGoSearch(false);
    }
  }, [goSearch]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="sidebar">
        <div className={classes.side_control}>
          <Button style={classes.closeBtn} action={onChangeSidebar}>
            <span className="material-icons">close</span>
          </Button>
        </div>
        <div className={classes.search_control}>
          <div className={classes.search_container}>
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="search location"
              onChange={(e) => setQuerySearch(e.target.value)}
              onKeyPress={(e) => {
                e.key === "Enter"
                  ?  setGoSearch(true)
                  :  setGoSearch(false);
              }}
            />
          </div>
          <Button
            style={classes.searchBtn}
            action={
              querySearch !== ""
                ? () => setGoSearch(true)
                : () => setGoSearch(false)
            }
          >
            Search
          </Button>
        </div>

        <div className={classes.list_result}>
          <ul>
            {result &&
              result.data.map((res) => (
                <li key={res.woeid}>
                  <Link href={`/${res.woeid}`}>
                    <a>
                      {res.title}
                      <span className="material-icons">chevron_right</span>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SidebarSearch;
