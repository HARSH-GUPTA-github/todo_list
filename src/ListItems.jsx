import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const ListItems = (props) => {
  return (
    <>
      <li className="li">
        <Tooltip title="delete">
          <IconButton
            className="button_delete"
            size="small"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <span className="list_item">{props.value}</span>
      </li>
    </>
  );
};
export default ListItems;
