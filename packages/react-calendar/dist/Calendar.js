import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import NextJsCalendar from './ui/Nextjscalender';
const CalendarContent = async ({ Events, styleOverrides })=>{
    return /*#__PURE__*/ _jsx(NextJsCalendar, {
        Events: Events,
        stylesOverrides: styleOverrides
    });
};
export const Calendar = ({ Events, stylesOverrides })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(CalendarContent, {
            Events: Events,
            styleOverrides: stylesOverrides
        })
    });
