import React from 'react';
import {MDBContainer, MDBCol, MDBRow} from 'mdbreact';

export const NotFound = () => (
  <React.Fragment>
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="my-4">
          <h1>ページが見つかりません</h1>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </React.Fragment>
);

export default NotFound;