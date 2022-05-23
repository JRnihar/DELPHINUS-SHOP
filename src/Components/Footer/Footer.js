import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white p-3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                            <h3 className='mb-5'>Solution</h3>
                            <p>Intelligence sortin...</p>
                            <p>Camera Barcode Rea...</p>
                            <p>Intelligent Wareho...</p>
                            
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-5'>About</h3>
                        <p>Company Profile</p>
                        <p>Investor relation</p>
                        <p>Corporate Honer</p>

                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-5'>Contact</h3>
                        <p>Contact</p>
                    
                        <p>Leave Massage</p>
                    </div>
                    <div className="col-md-3" style={{borderLeft: "2px solid red"}}>
                        <h2 className='mb-5'>+8078556343</h2>
                        <p>Contact us : slaes@wazin.com</p>
                        <p>After sales : Serveics@waxdee.com</p>
                        <p>Address : No.979 anti 3rd road,chittagong,bangladesh</p>
                    </div>
                </div>
                <hr />
                <p>Copyright 2021-2022 , Ways intelligent Shops LTD. All right reserved.privacy</p>
            </div>
        </div>
    );
};

export default Footer;