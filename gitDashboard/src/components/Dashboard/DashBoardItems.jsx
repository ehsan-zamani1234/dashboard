import styled from "@emotion/styled";
import SearchContainer from "./SearchContainer/SearchContainer";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center   ",
  width: "80%",
});

const DashBoardItems = () => {
  return (
    <Container>
      <SearchContainer />
      <SecondSection />
      <ThirdSection />
    </Container>
  );
};

export default DashBoardItems;
