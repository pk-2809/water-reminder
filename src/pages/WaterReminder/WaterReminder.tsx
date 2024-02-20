import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './WaterReminder.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import Notifications from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import TodayRecords from '../../utils/data';

export const WaterReminder = () => {

    const [percent, setPercent] = useState<number>(0);
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const todayRecord = TodayRecords;

    const setProgressAnimation = () => {
        setPercent(81);
        console.log(todayRecord);
    }

    useEffect(() => {
        setProgressAnimation();
    }, [])

    return (
        <div className='flex flex-col h-screen'>
            <AppBar position="static">
                <Toolbar className='justify-between'>
                    <div></div>
                    <div>
                        <p>Hydration Reminder</p>
                    </div>
                    <IconButton>
                        <Notifications className='white' />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className='flex-1 flex flex-col ms-3 me-3 mb-4'>
                <div className='flex-1 circle-bar'>
                    <CircularProgressbar styles={buildStyles({
                        pathTransitionDuration: 5,
                        pathColor: `#2076d2`,
                    })}
                        strokeWidth={5} className='circle-clr' value={percent} maxValue={100} text={`${percent}%`} />
                </div>
                <div className='flex justify-center'>
                    <Swiper
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={10}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        onSwiper={(swiper: any) => console.log(swiper)}
                        onSlideChange={(swiper: any) => console.log(swiper)}
                        className="mySwiper w-11/12"
                    >
                        <SwiperSlide>200 ml</SwiperSlide>
                        <SwiperSlide>300 ml</SwiperSlide>
                        <SwiperSlide>400 ml</SwiperSlide>
                        <SwiperSlide>500 ml</SwiperSlide>
                    </Swiper>
                </div>

                <div className='today-record mt-2'>
                    <List
                        sx={{
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 }
                        }}
                        subheader={<ListSubheader>Today's Record</ListSubheader>}
                    >
                        {todayRecord.map((x) => (
                            <div key={x.id}>
                                <ListItem disablePadding>
                                    <ListItemButton className='flex justify-between'>

                                        <ListItemText primary={x.time} />
                                    </ListItemButton>
                                </ListItem>
                            </div>
                        ))}


                    </List>

                    <div>
                    </div>
                </div>
            </div>

        </div>
    )
}
