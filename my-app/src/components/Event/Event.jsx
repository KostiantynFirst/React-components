import {FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from 'react-icons/fa'
import PropTypes from 'prop-types';
import css from './Event.module.css'
import { iconSize } from "constants";
import { formatEventStart, formatEventDuration } from "utils";

export const Event = ({name, location, speaker, type, start, end}) => {
    return <div className={css.event}>
    <h2 className={css.title}>{name}</h2>
    <p className={css.info}>
      <FaMapMarkerAlt className={css.icon} size={iconSize.sm}/>
      {location}
    </p>
    <p className={css.info}>
      <FaUserAlt className={css.icon} size={iconSize.sm}/>
      {speaker}
    </p>
    <p className={css.info}>
      <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
      {formatEventStart(start)}
    </p>
    <p className={css.info}>
      <FaClock className={css.icon}/>
      {formatEventDuration(start, end)}
    </p>
    <span className={`${css.chip} ${css[type]}`}>{type}</span>
  </div>
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}