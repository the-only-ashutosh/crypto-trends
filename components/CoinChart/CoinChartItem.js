import { Card } from "@mui/material"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

const CoinChartItem = (props)=>{
    const date = new Date(props.time*1000);
    let n = date.toLocaleString("en-IN", {
        timeZone:'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit'
    });
    const timeValue = `${date.getDate()} ${months[date.getMonth()]}, ${n}`

    return <Card style={{marginBottom:4}}>
        <ListItem>
        <ListItemAvatar>
        <Avatar alt={props.coin_name} src={props.coin_img} />
        </ListItemAvatar>
        <ListItemText primary={props.coin_name} secondary={`${props.coin_id},   $${props.rate}`} />
        <ListItemText style={{alignItems:"end",display:"flex",flexDirection:"column"}} primary={`Volume: $${props.volume}`} secondary={timeValue} />
        </ListItem>
    </Card>
}

export default CoinChartItem;