import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import DynamicInput from "../../Input/DynamicInput";
import { Button } from "@mui/material";
import { grey } from '@mui/material/colors';

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.1)",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: 'column',
  rowGap: '8px',
  padding: '0 5px',
  boxSizing: 'border-box',
  marginTop: '8px',
}));

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "25px",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  position: 'relative',
  zIndex: -'1',
});

const Titel = styled('p')(({ theme }) => ({
  textAlign: 'center',
  background: '#f6f6f6',
  borderRadius: '5px',
  fontSize: '15px',
  fontWeight: '600',
  padding: '7px',
  position: 'absolute',
  top: '-32px',
  marginRight: '-6px',
  width: '150px'
}));

const ColorButton = styled(Button)(({ theme }) => ({
  fontWeight: '600',
  marginTop: '21px',
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  '&:hover': {
    backgroundColor: grey[700],
  },
  fontFamily: 'yekan',
  width: '100px'
}));

const SearchContainer = () => {
  return (
    <Container>
      <Grid
        container
        item
        spacing={3}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Item>
          <Titel >گذارش گیری</Titel>
          <DynamicInput />
          <DynamicInput />
          <DynamicInput />
          <DynamicInput />
          <ColorButton variant="contained">جستجو</ColorButton>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
          <Titel >گذارش گیری پیشرفته</Titel>
          <DynamicInput />
          <DynamicInput />
          <DynamicInput />
          <DynamicInput />
          <ColorButton variant="contained">جستجو</ColorButton>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
          <Titel >گذارش گیری روندی</Titel>
          <DynamicInput />
          <DynamicInput />
          <DynamicInput />
          <DynamicInput />
          <ColorButton variant="contained">جستجو</ColorButton>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchContainer;
