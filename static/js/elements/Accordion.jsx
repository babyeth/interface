import React, { Component } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
	AccordionItemState,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { FiCheck, FiArrowRightCircle, FiArrowDownCircle } from 'react-icons/fi';

class Accordion01 extends Component {
	render() {
		var namesItemOne = [
			'The Philosophy Of business analytics',
			'Fast-Track Your business',
			'Lies And Damn Lies About business',
		];

		return (
			<Accordion className="accodion-style--1" preExpanded={'0'}>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<AccordionItemState>
								{(state) => {
									return (
										<span>
											{state.expanded ? (
												<FiArrowDownCircle size="20px" color="green" />
											) : (
												<FiArrowRightCircle size="20px" color="green" />
											)}{' '}
											How much slippage should I use?
										</span>
									);
								}}
							</AccordionItemState>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<p>
							21% slippage minimum buying on the first day. <br></br>
							The slippage for buys will reduce after that.
						</p>
						<p>
							As for selling, because the fees are dynamic depending on price impact. <br></br>
							This can change depending on the market conditions, but start with 20% and work your way up
						</p>
					</AccordionItemPanel>
				</AccordionItem>

		
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<AccordionItemState>
								{(state) => {
									return (
										<span className="no-underline">
											{state.expanded ? (
												<FiArrowDownCircle size="20px" color="green" />
											) : (
												<FiArrowRightCircle size="20px" color="green" />
											)}{' '}
											How do I buy?
										</span>
									);
								}}
							</AccordionItemState>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<p>
							Download Metamask and set up a wallet if you haven’t already. Send
							some Ethereum to your new wallet address in order to ensure you
							have the funds and gas necessary to swap for $BETH.
							<br></br>
							<br></br>
							You can acquire Ethereum through Coinbase, as well as an
							increasing number of institutions. Just make sure it is ETH that
							can be sent to an external wallet, and not simply a pegged asset
							as seen on platforms like PayPal and Robinhood.
							<br></br>
							<br></br>
							Click the buy button on the top-right of this page and you will be
							directed to UniSwap where you can trade Ethereum and other ERC-20
							tokens directly for $BETH.
							<br></br>
							<br></br>
							$BETH will be listing on centralized platforms as well, stay
							tuned!
						</p>
					</AccordionItemPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<AccordionItemState>
								{(state) => {
									return (
										<span>
											{state.expanded ? (
												<FiArrowDownCircle size="20px" color="green" />
											) : (
												<FiArrowRightCircle size="20px" color="green" />
											)}{' '}
											What are the plans for marketing?
										</span>
									);
								}}
							</AccordionItemState>
						</AccordionItemButton>
					</AccordionItemHeading>

					<AccordionItemPanel>
						<p>
							From promotional ads on your favorite charting service to any
							nameable social media platform (Facebook, Reddit, Twitter, etc.)
							$BETH won’t be hard to find.
							<br></br>
							<br></br>
							As the holder count continues to grow, we have numerous plans to
							keep raising this token to the next tier, so expect the marketing
							to meet the moment.
						</p>
					</AccordionItemPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<AccordionItemState>
								{(state) => {
									return (
										<span>
											{state.expanded ? (
												<FiArrowDownCircle size="20px" color="green" />
											) : (
												<FiArrowRightCircle size="20px" color="green" />
											)}{' '}
											What makes BabyETH different?
										</span>
									);
								}}
							</AccordionItemState>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<p>
							BabyETH improves on the initial buyback contracts by  adding dynamic buyback mechanics dependent on Price Impact contributing to building a healthier price floor
							<br></br>
							<br></br>
							The problem with the original static buyback contracts is that they were easily exploitable by spam transactions or bots, that would be able to quickly drain the buyback contract
							BabyETH adds bot protection and spam protection, preventing the buyback mechanics from being abused.
						</p>
					</AccordionItemPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<AccordionItemState>
								{(state) => {
									return (
										<span>
											{state.expanded ? (
												<FiArrowDownCircle size="20px" color="green" />
											) : (
												<FiArrowRightCircle size="20px" color="green" />
											)}{' '}
											Why not renounce ownership?
										</span>
									);
								}}
							</AccordionItemState>
						</AccordionItemButton>
					</AccordionItemHeading>

					<AccordionItemPanel>
						<p>
							In order to keep BabyETH malleable to the trends of the market
							and ensure that the buyback wallet is properly tuned for the
							situation, much like EverRise, ownership of the contract must
							remain in the team’s hands.
							<br></br>
							<br></br>
							However, this is subject to change as BabyETH continues to grow
							and new options present themselves as far as automating the
							contract and giving the community full control of what BabyETH
							can become.
						</p>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<AccordionItemState>
								{(state) => {
									return (
										<span>
											{state.expanded ? (
												<FiArrowDownCircle size="20px" color="green" />
											) : (
												<FiArrowRightCircle size="20px" color="green" />
											)}{' '}
											Is the buyback system exploitable?
										</span>
									);
								}}
							</AccordionItemState>
						</AccordionItemButton>
					</AccordionItemHeading>

					<AccordionItemPanel>
						<p>
							No. By adding a buyback threshold preventing buybacks from being
							greater than the triggering sale, there is no way to force
							buybacks without incurring severe losses to transaction taxes, a
							portion of which reflects to all holders of $BETH.
							<br></br>
							<br></br>Furthermore, buybacks cannot be triggered more than once
							every three seconds, protecting it from being triggered by
							spamming transactions.
							<br></br>
							Measures where taken so that fees have a maximum settable value 20%, preventing us from abusing that mechanic.
						</p>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		);
	}
}

export default Accordion01;
