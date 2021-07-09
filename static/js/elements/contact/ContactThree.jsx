import React, { Component } from "react";

class ContactThree extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Official Links</span>
                                <h2 className="title">Links.</h2>
                                <div className="im_address_inner">
                                    <div className="im_address">
                                        <span>Contract:</span>
                                        <a className="link im-hover" href="https://etherscan.io/address/0xeeeb024af0927e2ec0c6e146b77c722b490d6d1d">0xeeeB024Af0927e2Ec0c6e146B77C722B490D6d1d</a>
                                    </div>
                                    <div className="im_address">
                                        <span>Chart:</span>
                                        <a className="link im-hover" href="https://www.dextools.io/app/uniswap/pair-explorer/0xbf55ae8c281aa732d2ab33bdf464ddcb709cb9d1">Dextools</a>
                                    </div>
                                    <div className="im_address">
                                        <span>Liquidity Lock:</span>
                                        <a className="link im-hover" href="https://app.unicrypt.network/amm/uni-v2/pair/0xbf55ae8c281aa732d2ab33bdf464ddcb709cb9d1">Unicrypt 1 Year LP Lock</a>
                                    </div>
                                    {/* <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="/about">See how it works</a>
                                    </div> */}
                                </div>
                            </div>
                    
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;