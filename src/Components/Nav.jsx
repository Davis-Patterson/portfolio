import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import headshotIcon from "/src/assets/nav/headshot-icon-zoom.png";
import linkedinLogo from "/src/assets/nav/linkedin-logo.svg";
import githubLogo from "/src/assets/nav/github-logo.svg";
import { styled } from "@mui/system";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ darkMode }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: darkMode ? "#fff" : "#555",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: darkMode ? "#fff" : "#555",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: darkMode ? "#505050" : "",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#505050"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: darkMode ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Nav = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const isActive = (sectionId) => {
    const currentSection = activeSection || "home";
    return currentSection === sectionId;
  };

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [darkMode]);

  return (
    <>
      <nav className='nav-container'>
        <div className='nav-contents'>
          <div className='home-button-container'>
            <HashLink smooth to='/#home' className='home-button'>
              <img
                src={headshotIcon}
                alt='headshot logo'
                className='headshot-logo'
              />
            </HashLink>
            <div className='home-button-adjacent'>
              <a
                href='https://www.linkedin.com/in/davispatterson/'
                className='nav-link'
              >
                <img
                  src={linkedinLogo}
                  alt='linkedin logo'
                  className='link-logo'
                />
              </a>
              <a href='https://github.com/Davis-Patterson' className='nav-link'>
                <img src={githubLogo} alt='github logo' className='link-logo' />
              </a>
              <MaterialUISwitch
                checked={darkMode}
                onChange={handleDarkModeChange}
                className='dark-toggle'
              />
            </div>
          </div>
          <div className='nav-buttons-container'>
            <HashLink
              smooth
              to='/#home'
              className={`nav-button ${isActive("home") ? "active" : ""}`}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to='/#about'
              className={`nav-button ${isActive("about") ? "active" : ""}`}
            >
              About
            </HashLink>
            <HashLink
              smooth
              to='/#projects'
              className={`nav-button ${isActive("projects") ? "active" : ""}`}
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to='/#contact'
              className={`nav-button ${isActive("contact") ? "active" : ""}`}
            >
              Contact
            </HashLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
