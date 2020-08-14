import React from "react";
import { Box } from "rebass";
import Title from "../../general/title";
import "./blm.css";
import statement from "./blm.json";

const BlackLivesMatter = () => {
  return (
    <div className="blm-page">
      <Title title="McMurtry Believes Black Lives Matter" width={[400, 400]} />
      <Box className="blm-message" width={[0.9, 0.6]} ml="auto" mr="auto">
        {statement.paragraphs.map((par) => (
          <p>{par}</p>
        ))}
      </Box>
      <Box className="blm-subtitle">
        <p>Getting Involved:</p>
      </Box>
      <Box className="blm-links" ml="auto" mr="auto" width={[0.9, 0.6]}>
        {statement.links.map((texturl) => (
          <a href={texturl.url}>
            <Box className="blm-link" width={[1]}>
              <p>{texturl.text}</p>
            </Box>
          </a>
        ))}
      </Box>
    </div>
  );
};

export default BlackLivesMatter;
