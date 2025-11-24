import React from "react";
import { Box } from "rebass";
import ContactCards from "../../general/contactcards";
import { affinity_groups } from "./mcmurtryaffinitygroups.json";

export default class McMurtryAffinityGroups extends React.Component {
  render() {
    return (
      <div className="mcmurtry-affinity-groups-page">
        <div className='affinity-hero'>
          <h1 className='affinity-main-title'>McMurtry Affinity Groups</h1>
        </div>
        <Box width={[0.8, 0.5]} ml="auto" mr="auto">
          <p>
            Affinity Groups at McMurtry, as extensions of the Diversity Council,
            aim to foster a sense of community among certain student populations
            including LGBTQ+, Black, Latinx, Jewish, and First-Gen/Low Income.
            These groups will be hosting movie nights, game nights, and other
            events throughout the semester in order to support and encourage
            connections in these groups. If you identify with one or more of
            these groups, we highly encourage you to join the group chats, meet
            new Murts and participate in any upcoming events!
          </p>
          <p>
            Each Affinity group has a designated liaison who acts as a bridge
            between the group and the Diversity Council. These are some really
            cool Murts who will be hosting events and activities for you all to
            enjoy. If you have any questions about a specific group, please feel
            free to reach out to the associated liaison or any member in the
            Diversity Council.
          </p>
          <p>
            If you are interested in joining one of the affinity groups, please
            reach out to the affinity group heads listed below
          </p>
        </Box>
        {affinity_groups.map((group) => {
          return (
            <>
              <Box width={320} ml="auto" mr="auto">
                <h1 className="affinity-group-title">{group.title}</h1>
              </Box>
              <ContactCards content={group.heads} width={280} minHeight="180px" />
            </>
          );
        })}
      </div>
    );
  }
}
