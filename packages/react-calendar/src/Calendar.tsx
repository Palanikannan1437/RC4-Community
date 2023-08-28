import { Suspense } from 'react'
import NextJsCalendar from './ui/Nextjscalender'
import  {IeventData,IstyleOverrides} from './ui/Nextjscalender'

const CalendarContent = async ({
    Events, styleOverrides
}: {Events:IeventData[]; styleOverrides?:IstyleOverrides }) => {

    return <NextJsCalendar Events={Events} stylesOverrides={styleOverrides} />
}

export const Calendar = ({
    Events , stylesOverrides 
}:{Events:IeventData[]; stylesOverrides?:IstyleOverrides}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <CalendarContent Events={Events} styleOverrides={stylesOverrides} />
    </Suspense>
)