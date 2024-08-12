import React from 'react'
import UpcomingEventTimer from './UpcomingEventTimer'
import EventSidebar from './EventSidebar'
import details from '../../../assets/images/events/events-details.jpg'

const EventDetailsContent = ({peel}) => {

    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />

                <UpcomingEventTimer peel={peel} />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="events-details-header">
                            <ul>
                                <li><i className='bx bx-calendar'></i>{peel.calendarDate}</li>
                                <li><i className='bx bx-map'></i>{peel.location}</li>
                                <li><i className='bx bx-time'></i>{peel.time}</li>
                            </ul>
                        </div>

                       

                        <div className="events-details-desc">
                            {peel.details.map((d,i)=>{

                                return <div key={i} className="mb-4">
                                    <h3>{d.heading}</h3>
                                    <div dangerouslySetInnerHTML={{__html: d.content}}></div>
                                </div>
                                
                            })}
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <EventSidebar peel={peel} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsContent