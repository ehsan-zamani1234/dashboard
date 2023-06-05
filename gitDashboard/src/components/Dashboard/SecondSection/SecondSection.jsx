import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import DoghnutChart from "./DoghnutChart";
import AreaChart from "./AreaChart";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  minHeight: "430px",
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
const SecondSection = () => {
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
            <AreaChart />
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <DoghnutChart />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondSection;
