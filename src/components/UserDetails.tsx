import { Box, Button, TextField } from "@mui/material";
import { useUserStore } from "../store/store";

export default function UserDetails() {
    const { userDetails, errors, updateUserDetails, validateField, setStep } = useUserStore();
    const fields = ["firstName", "lastName", "email"];

    const isFormValid = fields.every((field) => userDetails[field].trim() && !errors[field]);

    return (
        <Box>
            <TextField
                fullWidth margin="normal"
                label="First Name"
                value={userDetails.firstName}
                error={!!errors.firstName}
                helperText={errors.firstName}
                onBlur={() => validateField("firstName")}
                onChange={(e) => updateUserDetails("firstName", e.target.value)}
            />
            <TextField
                fullWidth margin="normal"
                label="Last Name"
                value={userDetails.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName}
                onBlur={() => validateField("lastName")}
                onChange={(e) => updateUserDetails("lastName", e.target.value)}
            />
            <TextField
                fullWidth margin="normal"
                label="Email"
                type="email"
                value={userDetails.email}
                error={!!errors.email}
                helperText={errors.email}
                onBlur={() => validateField("email")}
                onChange={(e) => updateUserDetails("email", e.target.value)}
            />
            <Button variant="contained"
                onClick={() => setStep(2)}
                disabled={!isFormValid}
                sx={{ mt: 2 }}>Next</Button>
        </Box>
    );
}