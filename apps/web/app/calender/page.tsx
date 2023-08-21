// import { AddToCalendarButton } from "add-to-calendar-button-react";

import nodeAddToCal from 'node-add-to-calendar';
import Calender from './calender'

export default async function Home() {

    // const address = 'Google, googleville 123 CA'
    // const eventData = {
    //     title: 'Meeting',
    //     startTime: new Date('8-20-23 12:00'),
    //     description: `Very important meeting at: \n\n${address}`,
    //     address
    // }
    // const link = nodeAddToCal.googleLink(eventData);

      const Events = [
        {
          // event_date: new Date(2023, 7, 23),
          event_date: new Date('8-20-23 12:00'),
          event_title: "Gsoc Demo Day",
          event_theme: 'blue',
          event_description:"This is a Demo day for Gsoc contributor where they show us what they have build in GSOC for the community"

        },
        {
          event_date: new Date(2023, 7, 10),
          event_title: "Birthday",
          event_theme: 'red',
          event_description:"Happy birthday"
        },
        {
          event_date: new Date(2023, 7, 25),
          event_title: "Upcoming Event",
          event_theme: 'green',
          event_description:'This is a nice event'
        }
      ]

    return (
        
        <>
            <p>hello world </p>

            <Calender Events={Events} />

         
        </>
    )
}


