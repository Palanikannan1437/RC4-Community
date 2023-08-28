"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@radix-ui/react-context-menu";
import { googleLink, outlookLink } from './function';
import './styles.css';
const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const DAYS = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
export default function NextJsCalendar({ Events, stylesOverrides }) {
    var _stylesOverrides, _stylesOverrides1, _stylesOverrides2, _stylesOverrides3, _stylesOverrides4, _stylesOverrides_eventCard, _stylesOverrides5, _stylesOverrides_eventCard1, _stylesOverrides6, _stylesOverrides_eventCard2, _stylesOverrides7, _stylesOverrides_eventCard3, _stylesOverrides8, _stylesOverrides_eventCard4, _stylesOverrides9, _stylesOverrides_eventCard5, _stylesOverrides10, _stylesOverrides11;
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [noOfDays, setNoOfDays] = useState([]);
    const [blankDays, setBlankDays] = useState([]);
    const MakeGoogleLink = (e)=>{
        return googleLink({
            title: e.event_title,
            startTime: e.event_date,
            description: e.event_description
        });
    };
    const MakeOutlookLink = (e)=>{
        return outlookLink({
            title: e.event_title,
            startTime: e.event_date,
            description: e.event_description
        });
    };
    Events.map((e)=>{
        e.google_event_link = MakeGoogleLink(e);
        e.outlook_event_link = MakeOutlookLink(e);
    });
    const [events, setEvents] = useState(Events);
    const initDate = ()=>{
        const today = new Date();
        setMonth(today.getMonth());
        setYear(today.getFullYear());
    };
    useEffect(()=>{
        getNoOfDays();
    }, [
        month,
        year
    ]);
    useEffect(()=>{
        initDate();
        getNoOfDays();
    }, []);
    const isToday = (date)=>{
        const today = new Date();
        const d = new Date(year, month, date);
        return today.toDateString() === d.toDateString();
    };
    const getNoOfDays = ()=>{
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const dayOfWeek = new Date(year, month).getDay();
        const blankDaysArray = Array.from({
            length: dayOfWeek
        }, (_, i)=>i + 1);
        const daysArray = Array.from({
            length: daysInMonth
        }, (_, i)=>i + 1);
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
            purple: 'border-purple-200 text-purple-800 bg-purple-100'
        },
        eventLink: 'block mb-1 text-sm font-semibold'
    };
    var _stylesOverrides_container, _stylesOverrides_header, _stylesOverrides_dayLabel, _stylesOverrides_calendarDay, _stylesOverrides_today, _stylesOverrides_eventCard_common, _stylesOverrides_eventCard_blue, _stylesOverrides_eventCard_red, _stylesOverrides_eventCard_yellow, _stylesOverrides_eventCard_green, _stylesOverrides_eventCard_purple, _stylesOverrides_eventLink;
    const styles = {
        container: `${defaultStyles.container} ${(_stylesOverrides_container = (_stylesOverrides = stylesOverrides) == null ? void 0 : _stylesOverrides.container) != null ? _stylesOverrides_container : ''}`,
        header: `${defaultStyles.header} ${(_stylesOverrides_header = (_stylesOverrides1 = stylesOverrides) == null ? void 0 : _stylesOverrides1.header) != null ? _stylesOverrides_header : ''}`,
        dayLabel: `${defaultStyles.dayLabel} ${(_stylesOverrides_dayLabel = (_stylesOverrides2 = stylesOverrides) == null ? void 0 : _stylesOverrides2.dayLabel) != null ? _stylesOverrides_dayLabel : ''}`,
        calendarDay: `${defaultStyles.calendarDay} ${(_stylesOverrides_calendarDay = (_stylesOverrides3 = stylesOverrides) == null ? void 0 : _stylesOverrides3.calendarDay) != null ? _stylesOverrides_calendarDay : ''}`,
        today: `${defaultStyles.today} ${(_stylesOverrides_today = (_stylesOverrides4 = stylesOverrides) == null ? void 0 : _stylesOverrides4.today) != null ? _stylesOverrides_today : ''}`,
        eventCard: {
            common: `${defaultStyles.eventCard.common} ${(_stylesOverrides_eventCard_common = (_stylesOverrides5 = stylesOverrides) == null ? void 0 : (_stylesOverrides_eventCard = _stylesOverrides5.eventCard) == null ? void 0 : _stylesOverrides_eventCard.common) != null ? _stylesOverrides_eventCard_common : ''}`,
            blue: `${defaultStyles.eventCard.blue} ${(_stylesOverrides_eventCard_blue = (_stylesOverrides6 = stylesOverrides) == null ? void 0 : (_stylesOverrides_eventCard1 = _stylesOverrides6.eventCard) == null ? void 0 : _stylesOverrides_eventCard1.blue) != null ? _stylesOverrides_eventCard_blue : ''}`,
            red: `${defaultStyles.eventCard.red} ${(_stylesOverrides_eventCard_red = (_stylesOverrides7 = stylesOverrides) == null ? void 0 : (_stylesOverrides_eventCard2 = _stylesOverrides7.eventCard) == null ? void 0 : _stylesOverrides_eventCard2.red) != null ? _stylesOverrides_eventCard_red : ''}`,
            yellow: `${defaultStyles.eventCard.yellow} ${(_stylesOverrides_eventCard_yellow = (_stylesOverrides8 = stylesOverrides) == null ? void 0 : (_stylesOverrides_eventCard3 = _stylesOverrides8.eventCard) == null ? void 0 : _stylesOverrides_eventCard3.yellow) != null ? _stylesOverrides_eventCard_yellow : ''}`,
            green: `${defaultStyles.eventCard.green} ${(_stylesOverrides_eventCard_green = (_stylesOverrides9 = stylesOverrides) == null ? void 0 : (_stylesOverrides_eventCard4 = _stylesOverrides9.eventCard) == null ? void 0 : _stylesOverrides_eventCard4.green) != null ? _stylesOverrides_eventCard_green : ''}`,
            purple: `${defaultStyles.eventCard.purple} ${(_stylesOverrides_eventCard_purple = (_stylesOverrides10 = stylesOverrides) == null ? void 0 : (_stylesOverrides_eventCard5 = _stylesOverrides10.eventCard) == null ? void 0 : _stylesOverrides_eventCard5.purple) != null ? _stylesOverrides_eventCard_purple : ''}`
        },
        eventLink: `${defaultStyles.eventLink} ${(_stylesOverrides_eventLink = (_stylesOverrides11 = stylesOverrides) == null ? void 0 : _stylesOverrides11.eventLink) != null ? _stylesOverrides_eventLink : ''}`
    };
    return /*#__PURE__*/ _jsx("div", {
        className: `antialiased sans-serif bg-gray-100 ${styles.container}`,
        children: /*#__PURE__*/ _jsx("div", {
            className: "container mx-auto px-4 py-2 md:py-24",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "bg-white rounded-lg shadow overflow-hidden",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: `${styles.header}`,
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-2xl font-bold text-gray-800",
                                        children: MONTH_NAMES[month]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "ml-1 text-lg text-gray-600 font-normal",
                                        children: year
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "border rounded-lg px-1",
                                children: [
                                    /*#__PURE__*/ _jsx("button", {
                                        type: "button",
                                        className: `leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer p-1 items-center ${month === 0 ? 'cursor-not-allowed opacity-25' : ''}`,
                                        disabled: month === 0,
                                        onClick: ()=>{
                                            setMonth(month - 1);
                                            getNoOfDays();
                                        },
                                        children: /*#__PURE__*/ _jsx("svg", {
                                            className: "h-6 w-6 text-gray-500 inline-flex leading-none",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 19l-7-7 7-7"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "border rounded-lg px-1 border-r inline-flex h-6",
                                        children: /*#__PURE__*/ _jsx("button", {
                                            type: "button",
                                            className: `leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer p-1 items-center ${month === 11 ? 'cursor-not-allowed opacity-25' : 'hover:bg-blue-200'}`,
                                            disabled: month === 11,
                                            onClick: ()=>{
                                                setMonth(month + 1);
                                                getNoOfDays();
                                            },
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                className: "h-6 w-6 text-gray-500 inline-flex leading-none",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ _jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 5l7 7-7 7"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "-mx-1 -mb-1",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "flex flex-wrap",
                                style: {
                                    marginBottom: '-40px'
                                },
                                children: DAYS.map((day, index)=>/*#__PURE__*/ _jsx("div", {
                                        style: {
                                            width: '14.26%'
                                        },
                                        className: "px-2 py-2",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: `${styles.dayLabel}`,
                                            children: day
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex flex-wrap border-t border-l",
                                children: [
                                    blankDays.map((blankday, index)=>/*#__PURE__*/ _jsx("div", {
                                            style: {
                                                width: '14.28%',
                                                height: '120px'
                                            },
                                            className: "text-center border-r border-b px-4 pt-2"
                                        }, index)),
                                    noOfDays.map((date, dateIndex)=>/*#__PURE__*/ _jsxs("div", {
                                            style: {
                                                width: '14.28%',
                                                height: '120px'
                                            },
                                            className: `${styles.calendarDay}`,
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: `inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${isToday(date) ? styles.today : 'text-gray-700 hover:bg-blue-200'}`,
                                                    children: date
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    style: {
                                                        height: '80px'
                                                    },
                                                    className: "overflow-y-auto mt-1",
                                                    children: events.filter((event)=>new Date(event.event_date).toDateString() === new Date(year, month, date).toDateString()).map((event, eventIndex)=>/*#__PURE__*/ _jsx("div", {
                                                            className: `px-2 py-1 rounded-lg mt-1 overflow-hidden border ${styles.eventCard[event.event_theme] || ''}`,
                                                            children: /*#__PURE__*/ _jsxs(ContextMenu, {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx(ContextMenuTrigger, {
                                                                        children: /*#__PURE__*/ _jsx("a", {
                                                                            href: event.event_link,
                                                                            className: `${styles.eventLink} hover:text-blue-500`,
                                                                            children: event.event_title
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs(ContextMenuContent, {
                                                                        className: "ContextMenuContent",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(ContextMenuItem, {
                                                                                className: "ContextMenuItem",
                                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                                    href: event.google_event_link,
                                                                                    children: "Add to Google Calendar"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ _jsx(ContextMenuItem, {
                                                                                className: "ContextMenuItem",
                                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                                    href: event.outlook_event_link,
                                                                                    children: "Add to Outlook Calendar"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }))
                                                })
                                            ]
                                        }, dateIndex))
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
