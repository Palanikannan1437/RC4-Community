import React from 'react';
import './styles.css';
export interface IeventData {
    event_date: Date;
    event_title: string;
    event_theme: string;
    event_description: string;
    google_event_link?: string;
    outlook_event_link?: string;
}
export interface IstyleOverrides {
    container?: string;
    header?: string;
    dayLabel?: string;
    calendarDay?: string;
    today?: string;
    eventCard?: {
        common?: string;
        blue?: string;
        red?: string;
        yellow?: string;
        green?: string;
        purple?: string;
    };
    eventLink?: string;
}
export default function NextJsCalendar({ Events, stylesOverrides }: {
    Events: IeventData[];
    stylesOverrides?: IstyleOverrides;
}): React.JSX.Element;
