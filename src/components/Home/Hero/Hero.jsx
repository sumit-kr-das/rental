import { useEffect, useRef, useState } from "react";
import "./hero.scss";
import { useNavigate } from "react-router-dom";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import Search from "./Search";

const Hero = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("london");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [searchCon, setSearchCon] = useState(false);

  const [dates, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  function handleClick(name, operation) {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }

  // close dropDown
  let menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpenDate(false);
        setOpenOptions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // context api
  const { dispatch } = useContext(SearchContext);

  function handleSearch() {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  }

  return (
    <header className="hero">
      <div className="hero_search_container">
        <img
          className="buttom_graphics"
          src="/assets/hero_bottom.svg"
          alt="bottom-graphics"
        />
        <div className="hero_search_max_width">
          <p>Over 102,000 hotels and homes across 10+ countries</p>
          <h1>
            New generation <br /> of booking
          </h1>
          <Search
            setDestination={setDestination}
            setSearchCon={setSearchCon}
            searchCon={searchCon}
            setOpenDate={setOpenDate}
            openDate={openDate}
            dates={dates}
            menuRef={menuRef}
            setDate={setDate}
            handleSearch={handleSearch}
            setOpenOptions={setOpenOptions}
            options={options}
            openOptions={openOptions}
            handleClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
