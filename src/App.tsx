import { Container, Stepper, Step, StepLabel, Box } from "@mui/material";
import UserDetails from "./components/UserDetails";
import AddressDetails from "./components/AddressDetails";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";
import { useUserStore } from "./store/store";
import './App.css'

const steps = ["User Details", "Address Details", "Account Details", "Review"];

function App() {
  const { step } = useUserStore();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}>
      <Container maxWidth="sm">
        <Stepper activeStep={step - 1} sx={{ mt: 3, mb: 3 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {step === 1 && <UserDetails />}
        {step === 2 && <AddressDetails />}
        {step === 3 && <AccountDetails />}
        {step === 4 && <Review />}
      </Container>
    </Box>
  )
}

export default App
