import css from './EventBoard.module.css'

export const EventBoard = ({events}) => {
    console.log(events)
    return <div className={css.eventBoard}>
        {events.map(e => <div key={e.name}>{e.name}</div>)}
    </div>
} 