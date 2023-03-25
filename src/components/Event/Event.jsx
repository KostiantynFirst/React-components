import {FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from 'react-icons/fa'
import PropTypes from 'prop-types';
import { iconSize } from "constants";
import { formatEventStart, formatEventDuration } from "utils";
import { Card, EventName, Info, Chip } from "./Event.styled";

export const Event = ({name, location, speaker, type, start, end}) => {
    return <Card>
    <EventName>{name}</EventName>
    <Info>
      <FaMapMarkerAlt size={iconSize.sm}/>
      {location}
    </Info>
    <Info>
      <FaUserAlt size={iconSize.sm}/>
      {speaker}
    </Info>
    <Info>
      <FaCalendarAlt size={iconSize.sm}/>
      {formatEventStart(start)}
    </Info>
    <Info>
      <FaClock size={iconSize.sm}/>
      {formatEventDuration(start, end)}
    </Info>
    <Chip eventType={type}>{type}</Chip>
  </Card>
}

// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}