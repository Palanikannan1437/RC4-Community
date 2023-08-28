"use client"

import React, { useState, useEffect } from 'react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu"

import { googleLink, outlookLink } from './function';

import './styles.css'
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface IeventData {
  event_date: Date;
  event_title: string;
  event_theme: string;
  event_description: string;
  google_event_link?: string;
  outlook_event_link?: string;
}


interface IstyleOverrides{
  container?:string;
  header?:string;
  dayLabel?:string
  calendarDay?:string;
  today?:string;
  eventCard?: {
    common ?:string;
    blue ?:string;
    red ?:string;
    yellow ?:string;
    green ?:string;
    purple ?:string;
  },
  eventLink ?:string;
}
export default function Calendar({
  Events,
  stylesOverrides
}: {
  Events: IeventData[];
  stylesOverrides?: IstyleOverrides;
}) {
  const [month, setMonth]: any = useState();
  const [year, setYear]: any = useState();
  const [noOfDays, setNoOfDays]: any = useState([]);
  const [blankDays, setBlankDays]: any = useState([]);

  const MakeGoogleLink = (e) => {
    return googleLink({
      title: e.event_title,
      startTime: e.event_date,
      description: e.event_description
    })
  }
  const MakeOutlookLink = (e) => {
    return outlookLink({
      title: e.event_title,
      startTime: e.event_date,
      description: e.event_description
    })
  }


  Events.map((e) => {
    e.google_event_link = MakeGoogleLink(e)
    e.outlook_event_link = MakeOutlookLink(e)
  })


  const [events, setEvents]: any = useState(Events)

  const initDate = () => {
    const today = new Date();
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  };

  useEffect(() => {
    getNoOfDays();
  }, [month, year]);

  useEffect(() => {
    initDate();
    getNoOfDays();
  }, []);


  const isToday = (date) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString();
  };

  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();
    const blankDaysArray = Array.from({ length: dayOfWeek }, (_, i) => i + 1);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setBlankDays(blankDaysArray);
    setNoOfDays(daysArray);
  };


  const defaultStyles = {
    container: 'h-screen',
    header: 'flex items-center justify-between py-2 px-6',
    dayLabel: 'text-gray-600 text-sm uppercase tracking-wide font-bold text-center',
    calendarDay: 'px-4 pt-2 border-r border-b relative',
    today: 'bg-blue-500 text-white',
    eventCard: {
      common: 'px-2 py-1 rounded-lg mt-1 overflow-hidden border',
      blue: 'border-blue-200 text-blue-800 bg-blue-100',
      red: 'border-red-200 text-red-800 bg-red-100',
      yellow: 'border-yellow-200 text-yellow-800 bg-yellow-100',
      green: 'border-green-200 text-green-800 bg-green-100',
      purple: 'border-purple-200 text-purple-800 bg-purple-100',
    },
    eventLink: 'block mb-1 text-sm font-semibold',
  };

  const styles = {
    container: `${defaultStyles.container} ${stylesOverrides?.container ?? ''}`,
    header: `${defaultStyles.header} ${stylesOverrides?.header ?? ''}`,
    dayLabel: `${defaultStyles.dayLabel} ${stylesOverrides?.dayLabel ?? ''}`,
    calendarDay: `${defaultStyles.calendarDay} ${stylesOverrides?.calendarDay ?? ''}`,
    today: `${defaultStyles.today} ${stylesOverrides?.today ?? ''}`,
    eventCard: {
      common: `${defaultStyles.eventCard.common} ${stylesOverrides?.eventCard?.common ?? ''}`,
      blue: `${defaultStyles.eventCard.blue} ${stylesOverrides?.eventCard?.blue ?? ''}`,
      red: `${defaultStyles.eventCard.red} ${stylesOverrides?.eventCard?.red ?? ''}`,
      yellow: `${defaultStyles.eventCard.yellow} ${stylesOverrides?.eventCard?.yellow ?? ''}`,
      green: `${defaultStyles.eventCard.green} ${stylesOverrides?.eventCard?.green ?? ''}`,
      purple: `${defaultStyles.eventCard.purple} ${stylesOverrides?.eventCard?.purple ?? ''}`,
    },
    eventLink: `${defaultStyles.eventLink} ${stylesOverrides?.eventLink ?? ''}`,
  };
  
  return (
    <div className={`antialiased sans-serif bg-gray-100 ${styles.container}`}>
      <div className="container mx-auto px-4 py-2 md:py-24">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className={`${styles.header}`}>
            <div>
              <span className="text-2xl font-bold text-gray-800">
                {MONTH_NAMES[month]}
              </span>
              <span className="ml-1 text-lg text-gray-600 font-normal">
                {year}
              </span>
            </div>
            <div className="border rounded-lg px-1">
              <button
                type="button"
                className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer p-1 items-center ${month === 0 ? 'cursor-not-allowed opacity-25' : ''}`}
                disabled={month === 0}
                onClick={() => {
                  setMonth(month - 1);
                  getNoOfDays();
                }}
              >
                <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="border rounded-lg px-1 border-r inline-flex h-6">
                <button
                  type="button"
                  className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer p-1 items-center ${month === 11 ? 'cursor-not-allowed opacity-25' : 'hover:bg-blue-200'}`}
                  disabled={month === 11}
                  onClick={() => {
                    setMonth(month + 1);
                    getNoOfDays();
                  }}
                >
                  <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="-mx-1 -mb-1">
            <div className="flex flex-wrap" style={{ marginBottom: '-40px' }}>
              {DAYS.map((day, index) => (
                <div key={index} style={{ width: '14.26%' }} className="px-2 py-2">
                  <div className={`${styles.dayLabel}`}>{day}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap border-t border-l">
              {blankDays.map((blankday, index) => (
                <div key={index} style={{ width: '14.28%', height: '120px' }} className="text-center border-r border-b px-4 pt-2"></div>
              ))}
              {noOfDays.map((date, dateIndex) => (
                <div key={dateIndex} style={{ width: '14.28%', height: '120px' }} className={`${styles.calendarDay}`}>
                  <div
                    className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${isToday(date) ? styles.today : 'text-gray-700 hover:bg-blue-200'}`}
                  >
                    {date}
                  </div>
                  <div style={{ height: '80px' }} className="overflow-y-auto mt-1">
                    {events.filter(event => new Date(event.event_date).toDateString() === new Date(year, month, date).toDateString()).map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${styles.eventCard[event.event_theme] || ''}`}
                      >
                        <ContextMenu>
                          <ContextMenuTrigger>
                            <a
                              href={event.event_link}
                              className={`${styles.eventLink} hover:text-blue-500`}
                            >
                              {event.event_title}
                            </a>
                          </ContextMenuTrigger>
                          <ContextMenuContent className="ContextMenuContent">
                            <ContextMenuItem className="ContextMenuItem">
                              <a href={event.google_event_link}>Add to Google Calendar</a>
                            </ContextMenuItem>
                            <ContextMenuItem className="ContextMenuItem">
                              <a href={event.outlook_event_link}>Add to Outlook Calendar</a>
                            </ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
