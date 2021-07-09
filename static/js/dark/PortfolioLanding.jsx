import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Helmet from '../component/common/Helmet';
import TextLoop from 'react-text-loop';
import HeaderThree from '../component/header/HeaderThree';
import FooterTwo from '../component/footer/FooterTwo';
import TabTwo from '../elements/tab/TabTwo';
import ContactThree from '../elements/contact/ContactThree';
import PortfolioList from '../elements/portfolio/PortfolioList';
import ServiceList from '../elements/service/ServiceList';
import BlogContent from '../elements/blog/BlogContent';
import Accordion01 from '../elements/Accordion';
import { FiCheck, FiX, FiArrowRightCircle } from 'react-icons/fi';

import { Link } from 'react-router-dom';

const SlideList = [
	{
		textPosition: 'text-left',
		category: 'Frictionless Yield',
		description: '',
		buttonText: 'BETH',
		buttonLink: '#presale',
	},
];
const PortfolioLanding = () => {
	let title = 'Tokenomics',
		description =
			'With tokenomics designed to protect buyers, through automatic token buybacks from a pool derived from taxes';
	const PostList = BlogContent.slice(0, 3);
	return (
		<div className="active-dark bg_color--9">
			<Helmet pageTitle="BabyETH - Frictionless Yield Perfected" />

			<HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

			{/* Start Slider Area   */}
			<div id="home" className="fix">
				<div className="slider-wrapper">
					{/* Start Single Slide */}
					{SlideList.map((value, index) => (
						<div
							className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg-main1"
							key={index}
						>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className={`inner ${value.textPosition}`}>
											{value.category ? <span>{value.category}</span> : ''}
											<h1 className="title">
												BabyETH
												<br />
												<TextLoop>
												<span className="loop-text"> Dynamic Buyback</span>
													<span className="loop-text"> Reward Distribution</span>
													<span className="loop-text"> Deflationary Model</span>
													<span className="loop-text"> Anti Bot Protection</span>
												</TextLoop>{' '}
											</h1>
											<h2>Built on Ethereum</h2>
											{value.description ? (
												<p className="description">{value.description}</p>
											) : (
												''
											)}
											{value.buttonText ? (
												<div className="slide-btn mt--30">
													<a
														className="btn-default btn-border btn-opacity"
														href="#presale"
													>
														{value.buttonText}
													</a>
												</div>
											) : (
												''
											)}
											{/* <div className="floatimg-wrapper">
												<img
													className="floatimg"
													src="/assets/images/logo/logo-transparent.png"
												></img>
												<div className="shadow"></div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					{/* End Single Slide */}
				</div>
			</div>
			{/* End Slider Area   */}

			{/* Start Features Area  */}
			<div id="features" className="fix">
				<div className="service-area creative-service-wrapper pb--120 bg_color--8">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title text-center mb--30 mb_sm--0">
									<span className="subtitle">Frictionless Yield Perfected</span>
									<h2 className="title">Features</h2>
									<p className="description">
										The right formula on the right network. BabyETH takes
										buyback smart contracts, <br /> makes critical upgrades to
										it's mechanics, and imports it to the most utilized
										blockchain network.
									</p>
								</div>
							</div>
						</div>
						<div className="row creative-service">
							<div className="col-lg-12">
								<ServiceList
									item="6"
									column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Features Area  */}

			{/* Start Tokenomics Area */}
			<div id="tokenomics" className="fix">
				<div className="about-area ptb--120  bg_color--8">
					<div className="about-wrapper">
						<div className="container">
							<div className="row row--35">
								<div className="col-lg-5">
									<div className="thumbnail">
										<img
											className="w-100"
											src="/assets/images/about/about-8.jpg"
											alt="About Images"
										/>
									</div>
								</div>
								<div className="col-lg-7">
									<div className="about-inner inner">
										<div className="section-title">
											<span className="subtitle">Fair Distribution</span>
											<h2 className="title mb--20">{title}</h2>
											<p className="description mt_dec--20">{description}</p>
										</div>
										<div className="row mt--40">
											<TabTwo tabStyle="tab-style--1" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* End About Area */}
			{/* Start FAQ Area  */}
			<div id="faq" className="fix">
				<div className="rn-about-area ptb--80 bg_color--5 shadow1">
					<div className="container">
						<div className="row row--35 align-items-center">
							<div className="col-lg-6">
								<div className="thumbnail">
									<img
										className="w-100"
										src="/assets/images/about/faq.gif"
										alt="About Images"
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-inner inner">
									<div className="section-title">
										<span className="subtitle">Frequently Asked Questions</span>
										<h2 className="title">F.A.Q.</h2>
									</div>
									<div className="accordion-wrapper mt--30">
										<Accordion01 />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End FAQ Area  */}
			{/* Start Roadmap Area   */}
			{/* <div id="roadmap" className="fix">
				<div className="service-area creative-service-wrapper ptb--100 bg_color--8 shadow2">
					<div className="portfolio-details-accordion mt_md--40 mt_sm--40">
						<div className="inner">
							<div className="section-title">
								<div className="section-title text-center mb--30 mb_sm--0">
									<span className="subtitle">What you can expect from us</span>
									<h2 className="title">Roadmap</h2>
									<ul className="list-style--1">
										<li>
											<FiCheck /> Launch
										</li>
										<li>
											<FiCheck /> 1000 Holders
										</li>
										<li>
											<FiX color="red" /> CG Listing
										</li>
										<li>
											<FiCheck /> Seo Friendly Seo Friendly
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* End Roadmap Area   */}

			{/* Start Instructions Area */}
			{/* <div id="instructions" className="fix ">
				<div className="portfolio-area ptb--80 bg_color--8">
					<div className="portfolio-sacousel-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-title text-center mb--30 mb_sm--0">
										<span className="subtitle">Step by Step instructions</span>
										<h2 className="title">How to Buy?</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<PortfolioList
									styevariation="text-center mt--40"
									column="col-lg-4 col-md-6 col-sm-6 col-12"
									item="3"
								/>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* End Portfolio Area */}

			{/* Start Links Area */}
			<div id="links" className="fix">
				<div className="rn-contact-area ptb--80 bg_color--8">
					<ContactThree
						contactImages="/assets/images/about/links.gif"
						contactTitle="Links."
					/>
				</div>
			</div>
			{/* End COntact Area */}

			<FooterTwo />
			{/* Start Back To Top */}
			<div className="backto-top">
				<ScrollToTop showUnder={160}>
					<FiChevronUp />
				</ScrollToTop>
			</div>
			{/* End Back To Top */}
		</div>
	);
};

export default PortfolioLanding;
