import React from "react";

import { MobileServiceConsumer } from "../mobile-service-context";


const WithMobileService = () => (Wrapped) => {
    
    return (props) => {
        return (
            <MobileServiceConsumer>
                {
                    (mobileService) => {
                        return (
                            <Wrapped {...props}
                                     mobileService={mobileService}
                            />
                        )
                    }
                }
            </MobileServiceConsumer>
        )
    }
};

export default WithMobileService;