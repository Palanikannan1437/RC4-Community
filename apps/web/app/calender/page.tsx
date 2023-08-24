
import Calender from './calender'

export default async function Home() {
      const Events = [
        {
          // event_date: new Date(2023, 7, 23),
          event_date: new Date('8-24-23 12:00'),
          event_title: "Gsoc Demo Day",
          event_theme: 'blue',
          event_description:"This is a Demo day for Gsoc contributor where they show us what they have build in GSOC for the community"
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
            <Calender Events={Events} />         
        </>
    )
}


