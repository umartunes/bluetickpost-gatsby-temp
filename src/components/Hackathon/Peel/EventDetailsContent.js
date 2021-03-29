import React from 'react'
import UpcomingEventTimer from './UpcomingEventTimer'
import EventSidebar from './EventSidebar'
import details from '../../../assets/images/events/events-details.jpg'

const EventDetailsContent = ({peel}) => {
    console.log( peel )
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

                        <div className="events-details-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"></iframe>
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