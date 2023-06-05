import ListItem from "@mui/material/ListItem";
import MenuItem from "react-pro-sidebar";

const SidebarItem = (props) => {
  return (
    <ListItem>
      <MenuItem>{props.text}</MenuItem>
      SidebarItem
    </ListItem>
  );
};

export default SidebarItem;
