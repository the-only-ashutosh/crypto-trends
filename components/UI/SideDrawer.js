'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';

import Link from 'next/link';
import { Divider } from '@mui/material';

export default function SideDrawer(props) {

  return (
    <div>
        <Drawer
        anchor={'left'}
        open={true}
        onClose={props.reset}
        >
            <Box onClick={props.reset}>
                <div style={{backgroundColor:'#1976d2',height:40,color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:24}}>Menu</div>
                <List>
                    <ListItem key={'Filter by time'} disablePadding>
                        <Link href="/filterbytime" style={{textDecoration:'none'}}>
                            <ListItemButton>
                                <ListItemIcon >
                                    <FilterListRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Filter by time'} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider/>
                    <ListItem key={'Generate Graph'} disablePadding>
                        <Link href="/generategraph" style={{textDecoration:'none'}}>
                            <ListItemButton>
                                <ListItemIcon >
                                    <ShowChartRoundedIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Generate Graph'} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    </div>
  );
}
