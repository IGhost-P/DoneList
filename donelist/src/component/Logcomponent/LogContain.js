import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
    {
        id: 1,
        title: 'event 1',
        start: '2021-08-14T10:00:00',
        end: '2021-08-14T12:00:00',
    },
    {
        id: 2,
        title: 'event 2',
        start: '2021-08-16T13:00:00',
        end: '2021-08-16T18:00:00',
    },
    {
        id: 3,
        title: 'event 3',
        start: '2021-08-17',
        end: '2021-08-20'
    },
];

// 날짜 눌렀을때 이벤트 리스너
const handleDateClick = (arg) => { // bind with an arrow function
    // alert(arg.dateStr)
}

// 이벤트 구조
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
            <b></b>
        </>
    )
}

function LogContain() {
    return (
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={handleDateClick}
                eventContent={renderEventContent}
            />
        </div>
    )

}

export default LogContain
