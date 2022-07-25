import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import React, { useState } from "react";
import { format } from "date-fns";
import "./header.css";
const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>

          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <button className="headerBtn">Sign in / Register</button>
              <div>
                <div className="headerSearch">
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="headerSearchInput"
                      //   onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="headerIcon"
                    />
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText "
                    >
                      {`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(
                        state[0].endDate,
                        "MM/dd/yyyy"
                      )}`}
                    </span>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        className="date"
                      />
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="headerSearchText "
                    >{`${options.adult} audit ${options.children} children ${options.room} room`}</span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionsItems">
                          <span className="optionText">Audit</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.adult <= 1}
                              onClick={() => handleOption("adult", "d")}
                              className="optionCounterButton"
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.adult}
                            </span>
                            <button
                              onClick={() => handleOption("adult", "i")}
                              className="optionCounterButton"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionsItems">
                          <span className="optionText">Children</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.children <= 0}
                              onClick={() => handleOption("children", "d")}
                              className="optionCounterButton"
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.children}
                            </span>
                            <button
                              onClick={() => handleOption("children", "i")}
                              className="optionCounterButton"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionsItems">
                          <span className="optionText">Room</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.room <= 1}
                              onClick={() => handleOption("room", "d")}
                              className="optionCounterButton"
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.room}
                            </span>
                            <button
                              onClick={() => handleOption("room", "i")}
                              className="optionCounterButton"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
