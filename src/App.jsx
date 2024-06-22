import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";
import ListItems from "./ListItems";
import Tooltip from "@mui/material/Tooltip";

const App = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const inputItem = (event) => {
    setInput(event.target.value);
  };

  const addItem = () => {
    if (input === "") {
      return alert("Please enter a valid item.");
    }
    setItem((prevalue) => {
      return [...prevalue, input];
    });
    setInput("");
  };

  const deleteItem = (id) => {
    setItem((prevalue) => {
      return prevalue.filter((value, index) => {
        return index !== id;
      });
    });
  };

  const [theme, setTheme] = useState("dark");

  const themeChange = () => {
    var element = document.querySelector(".container");
    element.classList.toggle("active");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <div className="container">
        <Tooltip title={`${theme} mode`}>
          <IconButton onClick={themeChange} className="theme_btn">
            {theme === "light" ? (
              <LightModeIcon size="inherit" />
            ) : (
              <DarkModeIcon size="inherit" />
            )}
          </IconButton>
        </Tooltip>
        <div className="box">
          <h1 className="heading">ToDo LIST</h1>
          <div className="inputs">
            <input
              type="text"
              placeholder="add an item"
              value={input}
              onChange={inputItem}
            />
            <Tooltip title="add">
              <IconButton className="button_add" onClick={addItem}>
                <AddIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </div>
          <div className="listbox">
            <ol>
              {item.map((val, index) => {
                return (
                  <ListItems
                    key={index}
                    id={index}
                    value={val}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
