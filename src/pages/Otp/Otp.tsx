import { useState } from 'react';
import { Button } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input'
import './Otp.css';
import { useNavigate } from 'react-router-dom';

export const Otp = () => {
    const [otp, setOtp] = useState('');
    const nav = useNavigate();

    const handleChange = (newValue: any) => {
        setOtp(newValue)
        // console.log(otp);
    }

    const goToDashboard = () => {
        nav("/water-reminder");
    }

    return (
        <div className="flex h-full w-full">
            <div className="txt-wrap flex flex-col items-center w-full max-w-screen">
                <div className="w-11/12">
                    <MuiOtpInput TextFieldsProps={{ size: 'small' }} length={6} autoFocus={true} value={otp} onChange={handleChange} />
                </div>
                <div className="w-2/5 mt-4">
                    <Button variant="contained" className="w-full" onClick={goToDashboard}>
                        Send Otp
                    </Button>
                </div>
            </div>
        </div>
    );
};
