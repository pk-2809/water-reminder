import { TextField, Button } from "@mui/material";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const nav = useNavigate();

    const goToOtp = () => {
        nav("/otp");
    };

    return (
        <div className="flex h-full w-full page">
            <div className="txt-wrap flex flex-col items-center w-full max-w-screen">
                <div className="w-3/5">
                    <TextField
                        id="outlined-basic"
                        label="Enter mobile number"
                        variant="outlined" className="w-full" />
                </div>
                <div className="w-2/5 mt-4">
                    <Button variant="contained" className="w-full" onClick={goToOtp}>
                        Send Otp
                    </Button>
                </div>
            </div>
        </div>
    )
}
