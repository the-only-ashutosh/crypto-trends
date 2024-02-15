'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimeLower({timestamp,lowerChanged}) {
  const startsAt = dayjs.unix(timestamp.startTime);
  const endsAt = dayjs.unix(timestamp.endTime-300);

  return (
    <div style={{maxWidth:'90%',marginLeft:'5%',marginRight:'5%'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker label="Start From" value={startsAt} disabled={timestamp.disabled} minDateTime={startsAt} maxDateTime={endsAt} onChange={lowerChanged}/>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}