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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import bgFront from "assets/images/kutch.jpeg";
import bgBack from "assets/images/Indian_fort.jpeg";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import gujratData from '../../../StatesData/gujrat'


function Information({state}) {

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Fully integrated"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Payments functionality"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                // icon="touch_app"
                title={<span style={{fontFamily : 'cursive', fontSize : '25px'}}>Top Things To Do In {state}</span>}
                description={
                  gujratData?.frontData?.map((item, index) => {
                    return (
                      <ul
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          marginLeft : "1px"
                        }}
                        >
                        <li style={{ fontFamily : 'serif'}}><b style={{color : 'black', fontFamily : 'serif'}}>{item?.title}</b>{item?.description}</li>
                      </ul>
                    )
                  })
                }
              />
              <RotatingCardBack
                image={bgBack}
                title={<span style={{fontFamily : 'cursive', fontSize : '25px'}}>Top Things To Do In {state}</span>}
                description={
                  gujratData?.backdata?.map((item, index) => {
                    return (
                      <ul
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          marginLeft : "10px"
                        }}
                        >
                        <li style={{ fontFamily : 'serif'}}><b style={{color : 'black', fontFamily : 'serif'}}>{item?.title}</b>{item?.description}</li>
                      </ul>
                    )
                  })
                }
              action={{
                type: "internal",
                route: "#",
                label: "Thank You !!",
              }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox >
  );
}

export default Information;
