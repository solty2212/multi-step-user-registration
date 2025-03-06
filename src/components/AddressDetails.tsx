import { Box, Button, TextField } from "@mui/material";
import { useUserStore } from "../store/store";

export default function AddressDetails() {
    const { userDetails, errors, updateUserDetails, validateField, setStep } = useUserStore();
    const fields = ["street", "city", "state", "zip"];

    const isFormValid = fields.every((field) => userDetails[field].trim() && !errors[field]);
    return (
        <Box>
            <TextField
                fullWidth margin="normal"
                label="Street"
                value={userDetails.street}
                error={!!errors.street}
                helperText={errors.street}
                onBlur={() => validateField("street")}
                onChange={(e) => updateUserDetails("street", e.target.value)}
            />
            <TextField
                fullWidth margin="normal"
                label="City"
                value={userDetails.city}
                error={!!errors.city}
                helperText={errors.city}
                onBlur={() => validateField("city")}
                onChange={(e) => updateUserDetails("city", e.target.value)}
            />
            <TextField
                fullWidth margin="normal"
                label="State"
                value={userDetails.state}
                error={!!errors.state}
                helperText={errors.state}
                onBlur={() => validateField("state")}
                onChange={(e) => updateUserDetails("state", e.target.value)}
            />
            <TextField
                fullWidth margin="normal"
                label="Zip Code"
                value={userDetails.zip}
                error={!!errors.zip}
                helperText={errors.zip}
                onBlur={() => validateField("zip")}
                onChange={(e) => updateUserDetails("zip", e.target.value)}
            />
            <Button onClick={() => setStep(1)}
                sx={{ mt: 2 }}>Back</Button>
            <Button variant="contained"
                disabled={!isFormValid}
                sx={{ mt: 2 }}
                onClick={() => setStep(3)}>Next</Button>
        </Box>
    );
}