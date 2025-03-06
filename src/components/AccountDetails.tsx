import { Box, TextField, Button } from "@mui/material";
import { useUserStore } from "../store/store";

export default function UserDetails() {
    const { userDetails, errors, updateUserDetails, validateField, setStep } = useUserStore();
    const fields = ["username", "password"];

    const isFormValid = fields.every((field) => userDetails[field].trim() && !errors[field]);
    return (
        <Box>
            <TextField
                fullWidth margin="normal"
                label="User Name"
                value={userDetails.username}
                error={!!errors.username}
                helperText={errors.username}
                onBlur={() => validateField("username")}
                onChange={(e) => updateUserDetails("username", e.target.value)}
            />
            <TextField
                fullWidth margin="normal"
                label="Password"
                value={userDetails.password}
                error={!!errors.password}
                helperText={errors.password}
                onBlur={() => validateField("password")}
                onChange={(e) => updateUserDetails("password", e.target.value)}
            />
            <Button onClick={() => setStep(2)} sx={{ mt: 2 }}>Back</Button>
            <Button variant="contained"
                disabled={!isFormValid}
                sx={{ mt: 2 }}
                onClick={() => setStep(4)}>Next</Button>
        </Box>
    );
}