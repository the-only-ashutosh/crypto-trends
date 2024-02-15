'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link  from 'next/link';

import '@/components/UI/anchor.css';

const CoinListItem = (props)=>{
  const coinOb = props.coin;
  //{{pathname:`/${coinOb.name}`,query:{startTime:coinOb.startTime,endTime:coinOb.endTime}}}
    return<Card>
        <Link href={`/${coinOb.name}`} style={{textDecoration:'none',}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={coinOb.name} src={coinOb.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={coinOb.name}
                  secondary={
                      <Typography
                       sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {coinOb.id}
                      </Typography>
                  }
                />
            </ListItem>
      </Link>
    </Card>
}

export default CoinListItem;