import { styled } from "@mui/material/styles";
import DashBoardItems from "./DashBoardItems";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

const Dashboard = () => {
  return (
    <Container>
      <DashBoardItems />
    </Container>
  );
};

export default Dashboard;
