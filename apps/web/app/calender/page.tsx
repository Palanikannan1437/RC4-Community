// import Calender, { IeventData } from './calender'
import {Calendar}  from 'react-calendar'
import { IeventData } from './calender'

export default async function Home() {
      const Events:IeventData[] = [
        {
          event_date: new Date('8-24-23 12:00'),
          event_title: "Gsoc Demo Day",
          event_theme: 'blue',
          event_description:"This is a Demo day for Gsoc contributor where they show us what they have build in GSOC for the community",

        },
        {
          event_date: new Date('8-1-23 12:00'),
          event_title: "World Wide Web Day ",
          event_theme: 'blue',
          event_description:"YAY Today is world wide web day"
        },
        {
          event_date: new Date('8-28-23'),
          event_title: "Final week",
          event_theme: 'red',
          event_description:"GSoC contributors submit their final work product and their final mentor evaluation (standard coding period)"
        },
        {
          event_date: new Date('9-5-23 12:00'),
          event_title: "Results of GSOC",
          event_theme: 'green',
          event_description:'Initial results of Google Summer of Code 2023 announced'
        }
      ]

    return (
        
        <>
            <Calendar Events={Events}  stylesOverrides={{today:"bg-red-500"}}/>         
        </>
    )
}


