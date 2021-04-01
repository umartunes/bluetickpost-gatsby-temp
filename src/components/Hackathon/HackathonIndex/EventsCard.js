import React from 'react'
import { Link } from 'gatsby'

import allEvents from '../Data/allEvents'

const EventsCard = () => {
    return (
        <div className="events-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {allEvents.map((event, i) => {

                        return <div key={i} className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-events-box">
                                <div className="image">
                                    <Link to={event.eventPage} className="d-block">
                                        <img src={event.eventPhoto} alt="event" />
                                    </Link>
                                    <span className="date">{event.calendarDate}</span>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to={event.eventPage}>
                                            {event.title}
                                        </Link>
                                    </h3>
                                    <span className="location">
                                        <i className="bx bx-map"></i> {event.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                    })}

                </div>
            </div>
        </div>
    )
}

export default EventsCard