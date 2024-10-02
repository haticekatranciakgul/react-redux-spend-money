import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleClick = (e) => {
    e.preventDefault();
    colorMode.toggleColorMode();
    console.log("toggleColorMode tıklandı")
  }

  return (
    <>
      <AppBar position="static" sx={{ marginBottom:'20px'}}  >
        <Container maxWidth="xl">
          <Toolbar disableGutters >
            <Box
              component="img"
              sx={{
                height: 60,
                width: 60,
                margin: 1,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                borderRadius: '50%',
              }} 
              alt="The house from the offer."
              src="../../billgates.jpg"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 3
              }}
            >
              Spend Bill Gates' Money
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleClick}>
                {theme.palette.mode === "dark" ? (

                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeOutlinedIcon />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar
