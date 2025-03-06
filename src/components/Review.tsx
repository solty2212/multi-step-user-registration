import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/store";

export default function Review() {
    const { userDetails, setStep, clearData } = useUserStore();
    const navigate = useNavigate();

    const handleSumbit = () => {
        // TODO: Send data to API
        // When succesfull clear data and navigate to success screen
        // When something go wront, shot error message
        clearData();
        navigate("/success")
    }

    return (
        <>
            <Typography variant="h6">Review Your Details</Typography>
            <Box
                sx={{
                    textAlign: "start",
                    px: 2,
                }}>
                <Typography>First Name: {userDetails.firstName}</Typography>
                <Typography>Last Name: {userDetails.lastName}</Typography>
                <Typography>Email: {userDetails.email}</Typography>
                <Typography>Street: {userDetails.street}</Typography>
                <Typography>City: {userDetails.city}</Typography>
                <Typography>Zip Code: {userDetails.zip}</Typography>
                <Typography>Username: {userDetails.username}</Typography>
            </Box>
            <Button
                sx={{ mt: 2 }}
                onClick={() => setStep(3)}>Back</Button>
            <Button
                sx={{ mt: 2 }}
                variant="contained" onClick={handleSumbit}>Submit</Button>
        </>
    );
}