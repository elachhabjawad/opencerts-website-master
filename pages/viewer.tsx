import React from "react";
import { connect } from "react-redux";
import { Wrapper, Main } from "../src/components/Layout/Body";
import { FooterBar } from "../src/components/Layout/FooterBar";
import { NavigationBar } from "../src/components/Layout/NavigationBar";
import { ViewerContainer } from "../src/components/ViewerPageContainer";
import DocumentCertificate from "../src/components/CertificateDropZone/DocumentCertificate";

const ViewerPage: React.FunctionComponent = () => (
  <Wrapper>
    <NavigationBar />
    <Main>
      {/* <ViewerContainer />  */}
      <DocumentCertificate />
    </Main>
    <FooterBar />
  </Wrapper>
);

export default connect()(ViewerPage);
