import React from "react";
import { Box } from "rebass";
import Cards from "../../general/contactcards";
import "./court.css";
import { justices } from "./court.json";

export default class Court extends React.Component {
  render() {
    const chiefs = justices.filter((justice) => justice.position === "Chief Justice");
    const associates = justices.filter((justice) => justice.position === "Associate Justice");

    return (
      <div className="court-page">
        <div className='court-hero'>
          <h1 className='court-main-title'>McCourt</h1>
        </div>
        <Box width={[330]} ml="auto" mr="auto">
          <h2 className="division-title">Chief Justices</h2>
          <p align="center">
            {/* <strong>Watch:&nbsp;</strong>
            <a href="https://youtu.be/-FCBsQJaz0c" target="_blank">
              <strong>Chief and Justice, Origins</strong>
            </a> */}
          </p>
        </Box>
        <Cards content={chiefs} width={[270]} minHeight="160px" />
        <Box width={[330]} ml="auto" mr="auto">
          <h2 className="division-title">Associate Justices</h2>
        </Box>
        <Cards content={associates} width={[270]} minHeight="160px" />
      </div>
    );
  }
}
