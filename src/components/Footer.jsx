import { Popover, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <footer className="bg-dark text-center text-white">
      <div className="p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="/me"
            role="button"
          >
            About Me
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/donat.lukacs.5"
            role="button"
          >
            Facebook
          </a>

          <button
            className="btn btn-outline-light btn-floating m-1"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            Tel
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>+36 20 588 0993</Typography>
            </Popover>
          </button>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/lukacsdonat03"
            role="button"
          >
            Github
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/lukács-donát-a05b95213/"
            role="button"
          >
            LinkedIn
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright
      </div>
    </footer>
  );
};
