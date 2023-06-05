import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import TableComponent from "./TableCommponent";
import PieChart from "./PieChart";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  minHeight: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.1)",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "25px",
  paddingTop: "25px",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
});
const ThirdSection = () => {
  return (
    <Container>
      <Grid
        container
        item
        spacing={3}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} md={12} lg={8}>
          <Item>
            <TableComponent />
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <PieChart />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThirdSection;
