// import { AddToCalendarButton } from "add-to-calendar-button-react";

import nodeAddToCal from 'node-add-to-calendar';
import Example from './calender'

export default async function Home() {

    // const address = 'Google, googleville 123 CA'
    // const eventData = {
    //     title: 'Meeting',
    //     startTime: new Date('8-20-23 12:00'),
    //     description: `Very important meeting at: \n\n${address}`,
    //     address
    // }
    // const link = nodeAddToCal.googleLink(eventData);
    const calendarData = [
        { day: 1, events: [{ name: "Meeting", time: "12:00~14:00" }, { name: "Meeting", time: "18:00~20:00" }] },
        // ... continue for other days
      ];
      

    return (
        
        <>
            <p>hello world </p>

            <Example></Example>
         
        </>
    )
}


