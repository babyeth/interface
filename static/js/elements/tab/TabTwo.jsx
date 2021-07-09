import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component {
	render() {
		let tab1 = 'Distribution',
			tab2 = 'Taxes',
			tab3 = 'Dynamic Fees',
			tab4 = 'Others';
		const { tabStyle } = this.props;
		return (
			<div>
				{/* Start Tabs Area */}
				<div className="tabs-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<Tabs>
									<TabList className={`${tabStyle}`}>
										<Tab>{tab1}</Tab>
										<Tab>{tab2}</Tab>
										<Tab>{tab3}</Tab>
									</TabList>

									<TabPanel>
										<div className="single-tab-content">
											<div
												className={`rn-progress-bar progress-bar--1 mt_dec--10`}
											>
												<div className="single-progress">
													<h6 className="title">Smart Contract</h6>
													<ProgressBar now={50} />
													<span className="label">50%</span>
												</div>

												<div className="single-progress">
													<h6 className="title">Liquidity</h6>
													<ProgressBar now={39} />
													<span className="label">39%</span>
												</div>
												<div className="single-progress">
													<h6 className="title">Private Sale</h6>
													<ProgressBar now={10} />
													<span className="label">10%</span>
												</div>
												<div className="single-progress">
													<h6 className="title">Burned</h6>
													<ProgressBar now={1} />
													<span className="label">1%</span>
												</div>
											</div>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													<h3>
													Redistribution Fee<span></span>
													</h3>
													0% on first 3 days <br></br>
													4% onwards
												</li>
												<li>
													<h3>
														Liquidity Fee<span></span>
													</h3>
													20% the first day <br></br>
													15% the second day<br></br>
													8% onwards<br></br><br></br>
													The liquidity fee is split between the buyback mechanic<br></br> and the operations address for a 50/50 ratio.

												</li>
											</ul>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											
											<ul>
												<li>
													<h3>
														Buy Fees (Static)<span></span>
													</h3>{' '}										
													Check the taxes section of our tokenomics<br></br>
													Buy fees will always default to the minimum value<br></br>
													 of Redistribution Fee + Liquidity Fee<br></br>
												</li>
												<li>
													<h3>
														Selling Fees (Dynamic)<span></span>
													</h3>{' '}
													To prevent whale price manipulation<br></br>
													and build a gradual price floor and healthy buyback mechanic<br></br>
													Selling Fees will scale dynamically depending on price impact<br></br>
													Up to a maximum of 40%<br></br><br></br>
													After a buyback, Liquidity fee will be lowered in favour of the redistribution fee. 
												</li>
											</ul>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													<h3>
														ETH In CSE
														<span> - ABC University, Los Angeles, CA</span>
													</h3>{' '}
													2010
												</li>
												<li>
													<h3>
														Diploma in Computer Science
														<span> - Gamma Technical Institute</span>
													</h3>{' '}
													2009
												</li>
												<li>
													<h3>
														Graphic Designer
														<span> - ABC Institute, Los Angeles, CA</span>
													</h3>{' '}
													2007
												</li>
												<li>
													<h3>
														Graphic Designer
														<span> - ABC Institute, Los Angeles, CA</span>
													</h3>{' '}
													2007
												</li>
											</ul>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
				{/* End Tabs Area */}
			</div>
		);
	}
}

export default TabsTwo;
