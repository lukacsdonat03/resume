import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Typography} from '@mui/material'
import react from '../img/react.png'
import node from '../img/node.png'
import spring from '../img/spring.png'

export const Slides = () => {
  return (
    <div>
      <Carousel >
        <Carousel.Item>
          <img
            style={{ height: "550px" }}
            src={spring}
            alt="placeholder"
            className="d-block w-100"
          />
        <Carousel.Caption>
          <Typography variant="h3" color={'#404040'}>
            Java Spring Boot
          </Typography>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "550px" }}
            src={react}
            alt="placeholder"
            className="d-block w-100"
          />
        <Carousel.Caption>
          <Typography variant="h3" color={'white'}>
            React
          </Typography>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "550px" }}
            src={node}
            alt="placeholder"
            className="d-block w-100"
          />
        <Carousel.Caption>
          <Typography variant="h3" color={'white'}>
            Node
          </Typography>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
