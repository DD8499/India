/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import andhrapradesh from "assets/images/andhra.jpg";
import Arunachal_Pradesh from "assets/images/Arunachal_Pradesh.jpg";
import Assam from "assets/images/Assam.jpeg";
import Bihar from "assets/images/Bihar.jpg";
import Chhattisgarh from "assets/images/Chhattisgarh.jpg";
import jharkhand from "assets/images/jharkhand.jpg";
import goa from "assets/images/goa.jpg";
import gir from "assets/images/gir.jpg";
import gujrat from "assets/images/gujrat.jpeg";
import himachal from "assets/images/himachal.jpg";
import jammu from "assets/images/jammu.jpg";
import karnatak from "assets/images/karnatak.jpg";
import kerela from "assets/images/kerela.jpg";
import madhya from "assets/images/madhya.jpg";
import Up from "assets/images/taj_mahel.jpg";
// import madhya from "assets/images/madhya.jpg";
import rajasthan_camel from "assets/images/rajasthan_camel.jpg";
import punjab from "assets/images/amritsar.jpg";
import uttarakhand from "assets/images/uttarakhand.jpg";
import flag from "assets/images/uttarakhand.jpg";
import manipur from "assets/images/manipur.jpg";
import meghalay from "assets/images/meghalay.jpg";
import mizoram from "assets/images/mizoram.jpg";
import nagaland from "assets/images/nagaland.jpg";
import odisha from "assets/images/kornak.jpg";
import sikkim from "assets/images/pelling.jpg";
import tamilnadu from "assets/images/thanjavur.jpg";
import westBengal from "assets/images/kolkata.jpg";
import shivaji from "assets/images/maharashta.jpg";
import telangana from "assets/images/telangana.jpg";
import tripura from "assets/images/tripura.jpg";


function AboutUs({ state }) {
  const bgImage = state === 'Andhra Pradesh' ? andhrapradesh : state === 'Arunachal Pradesh' ? Arunachal_Pradesh : state === 'Assam' ? Assam : state === 'Bihar' ? Bihar : state === 'Chhattisgarh' ? Chhattisgarh : state === 'Goa' ? goa : state === 'Gujrat' ? gujrat : state === 'Haryana' ? flag : state === 'Himachal Pradesh' ? himachal : state === 'Jammu and Kashmir' ? jammu : state === 'Jharkhand' ? jharkhand : state === 'Karnataka' ? karnatak : state === 'Kerala' ? kerela : state === 'Madhya Pradesh' ? madhya : state === 'Maharashtra' ? shivaji : state === 'Manipur' ? manipur : state === 'Meghalaya' ? meghalay : state === 'Mizoram' ? mizoram : state === 'Nagaland' ? nagaland : state === 'Odisha' ? odisha : state === 'Punjab' ? punjab : state === 'Rajasthan' ? rajasthan_camel : state === 'Sikkim' ? sikkim : state === 'Tamil Nadu' ? tamilnadu : state === 'Telangana' ? telangana : state === 'Tripura' ? tripura : state === 'Uttar Pradesh' ? Up : state === 'Uttarakhand' ? uttarakhand : state === 'West Bengal' ? westBengal : flag
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome To {state}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Stretches out into the Arabian Sea, with a hint of the desert and with a coastline of 1600 kms long is Gujarat – the home state of Mahatma Gandhi, the Father of Nation
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
