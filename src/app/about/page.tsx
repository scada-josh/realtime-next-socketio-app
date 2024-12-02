// import AppAlert from "../components/AppAlert"
// import AppAlert from "@/app/components/AppAlert"
import Alert from "@mui/material/Alert";
import CheckIcon from '@mui/icons-material/Check';

export default function Page() {
  return (
    <main>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
      <p>About Page</p>
    </main>
  );
}