import moment from 'moment';
const handleEventData = (eventData)=>{
    const dataObj = {
        startTime: Date.now(),
        address: '',
        duration: 30,
        title: '',
        description: ''
    };
    return Object.assign(dataObj, eventData);
};
const handleDescriptionFormatting = (description)=>{
    return description.replace(new RegExp(/\n/, 'g'), '%0D%0A');
};
const googleLink = (eventData = {})=>{
    const { startTime, address, duration, title, description } = handleEventData(eventData);
    return `https://calendar.google.com/calendar/r/eventedit?dates=${moment(startTime).format('YYYYMMDD[T]HHmm[00]')}/${moment(startTime).add(duration, 'm').format('YYYYMMDD[T]HHmm[00]')}&location=${address}&text=${title}&details=${handleDescriptionFormatting(description)}`;
};
const outlookLink = (eventData = {})=>{
    const { startTime, address, duration, title, description } = handleEventData(eventData);
    return `https://outlook.live.com/owa/?rru=addevent&startdt=${moment(startTime).format('YYYYMMDD[T]HHmm[00]Z')}&enddt=${moment(startTime).add(duration, 'm').format('YYYYMMDD[T]HHmm[00]Z')}&subject=${title}&location=${address}&body=${handleDescriptionFormatting(description)}`;
};
export { outlookLink, googleLink };
