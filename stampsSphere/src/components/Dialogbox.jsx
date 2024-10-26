import React from "react";
import {
  Button,
  Dialog,
} from "@material-tailwind/react";
import Admin from "../pages/AdminDashboard1";
export function MessageDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className="bg-custom-red">Update the status </Button>
      <Dialog open={open} size="xs" className="m-40" handler={handleOpen}>
        <Admin />
      </Dialog>
    </>
  );
}