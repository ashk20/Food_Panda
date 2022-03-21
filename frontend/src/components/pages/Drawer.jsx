import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';



function DrawerComponent(props) {
  const history = useHistory()

  const handleLogOut = () => {
    history.push("/login")
  }

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div >

      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        { props.loadingUser ? (
           <List>
           <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/">Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/dishes">Order</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/" onClick={handleLogOut}>logout</Link>
              </ListItemText>
            </ListItem>
          </List>

        ):(
          <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
             <ListItemText>
               <Link to="/">Home</Link>
             </ListItemText>
           </ListItem>
           <ListItem onClick={() => setOpenDrawer(false)}>
             <ListItemText>
               <Link to="/login">Login</Link>
             </ListItemText>
           </ListItem>
           <ListItem onClick={() => setOpenDrawer(false)}>
             <ListItemText>
               <Link to="/signup">Signup</Link>
             </ListItemText>
           </ListItem>
           
         </List>
        )}
      
      </Drawer>
      <IconButton style={{color: 'white'}}
      onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
      </IconButton>
    </div>
  );
}
export default DrawerComponent;
