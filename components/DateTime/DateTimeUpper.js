'use client';

import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimeUpper({timestamp,upperChanged}) {
  
  const startsAt = dayjs.unix(timestamp.startTime + 300);
  const endsAt = dayjs.unix(timestamp.endTime);

  return (
    <div style={{maxWidth:'90%',marginLeft:'5%',marginRight:'5%'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker label="Ends At" value={endsAt} disabled={timestamp.disabled} minDateTime={startsAt} maxDateTime={endsAt} onChange={upperChanged}/>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}