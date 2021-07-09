(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        47: function(e, t, a) {
            e.exports = a(86)
        },
        52: function(e, t, a) {},
        86: function(e, t, a) {
            "use strict";
            a.r(t);
            var l = a(7),
                n = a(8),
                r = a(10),
                c = a(9),
                i = a(1),
                o = a.n(i),
                s = a(41),
                m = a.n(s),
                u = (a(52), a(22)),
                d = a.n(u),
                E = a(4),
                p = a(42),
                g = function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a() {
                        return Object(l.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(n.a)(a, [{
                        key: "render",
                        value: function() {
                            return o.a.createElement(o.a.Fragment, null, o.a.createElement(p.Helmet, null, o.a.createElement("meta", {
                                charSet: "utf-8"
                            }), o.a.createElement("title", null, this.props.pageTitle), o.a.createElement("meta", {
                                name: "robots",
                                content: "noindex, follow"
                            }), o.a.createElement("meta", {
                                name: "description",
                                content: "Crypto"
                            }), o.a.createElement("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                            })))
                        }
                    }]), a
                }(i.Component),
                b = a(46),
                h = a(17),
                f = a(18),
                v = a(43),
                y = a.n(v),
                N = [{
                    Social: o.a.createElement(f.a, null),
                    link: "https://t.me/babyeth_net"
                }, {
                    Social: o.a.createElement(f.b, null),
                    link: "https://twitter.com/BabyETH_net"
                }],
                w = function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a(e) {
                        var n;
                        return Object(l.a)(this, a), (n = t.call(this, e)).menuTrigger = n.menuTrigger.bind(Object(h.a)(n)), n.CLoseMenuTrigger = n.CLoseMenuTrigger.bind(Object(h.a)(n)), n.stickyHeader = n.stickyHeader.bind(Object(h.a)(n)), window.addEventListener("load", (function() {
                            console.log("All assets are loaded")
                        })), n
                    }
                    return Object(n.a)(a, [{
                        key: "menuTrigger",
                        value: function() {
                            document.querySelector(".header-wrapper").classList.toggle("menu-open")
                        }
                    }, {
                        key: "CLoseMenuTrigger",
                        value: function() {
                            document.querySelector(".header-wrapper").classList.remove("menu-open")
                        }
                    }, {
                        key: "stickyHeader",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            window.addEventListener("scroll", (function() {
                                window.scrollY > 100 ? document.querySelector(".header--fixed").classList.add("sticky") : document.querySelector(".header--fixed").classList.remove("sticky")
                            }));
                            var e = document.querySelectorAll(".has-droupdown > a");
                            for (var t in e) e.hasOwnProperty(t) && (e[t].onclick = function() {
                                this.parentElement.querySelector(".submenu").classList.toggle("active"), this.classList.toggle("open")
                            });
                            var a, l = this.props,
                                n = (l.logo, l.color),
                                r = void 0 === n ? "default-color" : n;
                            return a = o.a.createElement("img", {
                                src: "/assets/images/logo/logo-transparent.png",
                                alt: "BabyETH"
                            }), o.a.createElement("header", {
                                className: "header-area header-style-two header--fixed ".concat(r)
                            }, o.a.createElement("div", {
                                className: "header-wrapper"
                            }, o.a.createElement("div", {
                                className: "header-left d-flex align-items-center"
                            }, o.a.createElement("div", {
                                className: "logo"
                            }, o.a.createElement("a", {
                                href: this.props.homeLink
                            }, a)), o.a.createElement("nav", {
                                className: "mainmenunav d-lg-block ml--50"
                            }, o.a.createElement(y.a, {
                                className: "mainmenu",
                                items: ["home", "features", "tokenomics", "faq", "links"],
                                currentClassName: "is-current",
                                offset: -200
                            }, o.a.createElement("li", null, o.a.createElement("a", {
                                href: "#home"
                            }, "Home")), o.a.createElement("li", null, o.a.createElement("a", {
                                href: "#features"
                            }, "Features")), o.a.createElement("li", null, o.a.createElement("a", {
                                href: "#tokenomics"
                            }, "Tokenomics")), o.a.createElement("li", null, o.a.createElement("a", {
                                href: "#faq"
                            }, "FAQ")), o.a.createElement("li", null, o.a.createElement("a", {
                                href: "#links"
                            }, "Links"))))), o.a.createElement("div", {
                                className: "header-right"
                            }, o.a.createElement("div", {
                                className: "social-share-inner d-none d-sm-block"
                            }, o.a.createElement("ul", {
                                className: "social-share social-style--2 color-black d-flex justify-content-start liststyle"
                            }, N.map((function(e, t) {
                                return o.a.createElement("li", {
                                    key: t
                                }, o.a.createElement("a", {
                                    href: "".concat(e.link)
                                }, e.Social))
                            })))), o.a.createElement("div", {
                                className: "header-btn"
                            }, o.a.createElement("a", {
                                className: "btn-default btn-border btn-opacity",
                                target: "_blank",
                                href: "#presale"
                            }, o.a.createElement("span", null, "buy Now"))), o.a.createElement("div", {
                                className: "humberger-menu d-block d-lg-none pl--20 pl_sm--10"
                            }, o.a.createElement("span", {
                                onClick: this.menuTrigger,
                                className: "menutrigger text-white"
                            }, o.a.createElement(E.g, null))), o.a.createElement("div", {
                                className: "close-menu d-block d-lg-none"
                            }, o.a.createElement("span", {
                                onClick: this.CLoseMenuTrigger,
                                className: "closeTrigger"
                            }, o.a.createElement(E.j, null))))))
                        }
                    }]), a
                }(i.Component),
                k = [{
                    Social: o.a.createElement(f.a, null),
                    link: "https://t.me/babyeth_net"
                }, {
                    Social: o.a.createElement(f.b, null),
                    link: "https://twitter.com/BabyETH_net"
                }],
                x = function() {
                    return o.a.createElement("div", {
                        className: "footer-style-2 ptb--30 bg_color--6"
                    }, o.a.createElement("div", {
                        className: "wrapper plr--50 plr_sm--20"
                    }, o.a.createElement("div", {
                        className: "row align-items-center justify-content-between"
                    }, o.a.createElement("div", {
                        className: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }, o.a.createElement("div", {
                        className: "inner"
                    }, o.a.createElement("div", {
                        className: "logo text-center text-sm-left mb_sm--20"
                    }, o.a.createElement("a", {
                        href: ""
                    }, o.a.createElement("img", {
                        src: "/assets/images/logo/logo-transparent.png",
                        alt: "BabyETH"
                    }))))), o.a.createElement("div", {
                        className: "col-lg-4 col-md-6 col-sm-6 col-12"
                    }, o.a.createElement("div", {
                        className: "inner text-center"
                    }, o.a.createElement("ul", {
                        className: "social-share rn-lg-size d-flex justify-content-center liststyle"
                    }, k.map((function(e, t) {
                        return o.a.createElement("li", {
                            key: t
                        }, o.a.createElement("a", {
                            href: "".concat(e.link)
                        }, e.Social))
                    }))))), o.a.createElement("div", {
                        className: "col-lg-4 col-md-12 col-sm-12 col-12"
                    }, o.a.createElement("div", {
                        className: "inner text-lg-right text-center mt_md--20 mt_sm--20"
                    }, o.a.createElement("div", {
                        className: "text"
                    }, o.a.createElement("p", null, "Copyright \xa9 2021.")))))))
                },
                C = a(16),
                j = a(88),
                L = function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a() {
                        return Object(l.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(n.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.tabStyle;
                            return o.a.createElement("div", null, o.a.createElement("div", {
                                className: "tabs-area"
                            }, o.a.createElement("div", {
                                className: "container"
                            }, o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("div", {
                                className: "col-lg-12"
                            }, o.a.createElement(C.d, null, o.a.createElement(C.b, {
                                className: "".concat(e)
                            }, o.a.createElement(C.a, null, "Distribution"), o.a.createElement(C.a, null, "Taxes"), o.a.createElement(C.a, null, "Dynamic Fees")), o.a.createElement(C.c, null, o.a.createElement("div", {
                                className: "single-tab-content"
                            }, o.a.createElement("div", {
                                className: "rn-progress-bar progress-bar--1 mt_dec--10"
                            }, o.a.createElement("div", {
                                className: "single-progress"
                            }, o.a.createElement("h6", {
                                className: "title"
                            }, "Smart Contract"), o.a.createElement(j.a, {
                                now: 50
                            }), o.a.createElement("span", {
                                className: "label"
                            }, "50%")), o.a.createElement("div", {
                                className: "single-progress"
                            }, o.a.createElement("h6", {
                                className: "title"
                            }, "Liquidity"), o.a.createElement(j.a, {
                                now: 39
                            }), o.a.createElement("span", {
                                className: "label"
                            }, "39%")), o.a.createElement("div", {
                                className: "single-progress"
                            }, o.a.createElement("h6", {
                                className: "title"
                            }, "Private Sale"), o.a.createElement(j.a, {
                                now: 10
                            }), o.a.createElement("span", {
                                className: "label"
                            }, "10%")), o.a.createElement("div", {
                                className: "single-progress"
                            }, o.a.createElement("h6", {
                                className: "title"
                            }, "Burned"), o.a.createElement(j.a, {
                                now: 1
                            }), o.a.createElement("span", {
                                className: "label"
                            }, "1%"))))), o.a.createElement(C.c, null, o.a.createElement("div", {
                                className: "single-tab-content"
                            }, o.a.createElement("ul", null, o.a.createElement("li", null, o.a.createElement("h3", null, "Redistribution Fee", o.a.createElement("span", null)), "0% on first 3 days ", o.a.createElement("br", null), "4% onwards"), o.a.createElement("li", null, o.a.createElement("h3", null, "Liquidity Fee", o.a.createElement("span", null)), "20% the first day ", o.a.createElement("br", null), "15% the second day", o.a.createElement("br", null), "8% onwards", o.a.createElement("br", null), o.a.createElement("br", null), "The liquidity fee is split between the buyback mechanic", o.a.createElement("br", null), " and the operations address for a 50/50 ratio.")))), o.a.createElement(C.c, null, o.a.createElement("div", {
                                className: "single-tab-content"
                            }, o.a.createElement("ul", null, o.a.createElement("li", null, o.a.createElement("h3", null, "Buy Fees (Static)", o.a.createElement("span", null)), " ", "Check the taxes section of our tokenomics", o.a.createElement("br", null), "Buy fees will always default to the minimum value", o.a.createElement("br", null), "of Redistribution Fee + Liquidity Fee", o.a.createElement("br", null)), o.a.createElement("li", null, o.a.createElement("h3", null, "Selling Fees (Dynamic)", o.a.createElement("span", null)), " ", "To prevent whale price manipulation", o.a.createElement("br", null), "and build a gradual price floor and healthy buyback mechanic", o.a.createElement("br", null), "Selling Fees will scale dynamically depending on price impact", o.a.createElement("br", null), "Up to a maximum of 40%", o.a.createElement("br", null), o.a.createElement("br", null), "After a buyback, Liquidity fee will be lowered in favour of the redistribution fee.")))), o.a.createElement(C.c, null, o.a.createElement("div", {
                                className: "single-tab-content"
                            }, o.a.createElement("ul", null, o.a.createElement("li", null, o.a.createElement("h3", null, "ETH In CSE", o.a.createElement("span", null, " - ABC University, Los Angeles, CA")), " ", "2010"), o.a.createElement("li", null, o.a.createElement("h3", null, "Diploma in Computer Science", o.a.createElement("span", null, " - Gamma Technical Institute")), " ", "2009"), o.a.createElement("li", null, o.a.createElement("h3", null, "Graphic Designer", o.a.createElement("span", null, " - ABC Institute, Los Angeles, CA")), " ", "2007"), o.a.createElement("li", null, o.a.createElement("h3", null, "Graphic Designer", o.a.createElement("span", null, " - ABC Institute, Los Angeles, CA")), " ", "2007"))))))))))
                        }
                    }]), a
                }(i.Component),
                T = function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a(e) {
                        var n;
                        return Object(l.a)(this, a), (n = t.call(this, e)).state = {
                            rnName: "",
                            rnEmail: "",
                            rnSubject: "",
                            rnMessage: ""
                        }, n
                    }
                    return Object(n.a)(a, [{
                        key: "render",
                        value: function() {
                            return o.a.createElement("div", {
                                className: "contact-form--1"
                            }, o.a.createElement("div", {
                                className: "container"
                            }, o.a.createElement("div", {
                                className: "row row--35 align-items-start"
                            }, o.a.createElement("div", {
                                className: "col-lg-6 order-2 order-lg-1"
                            }, o.a.createElement("div", {
                                className: "section-title text-left mb--50"
                            }, o.a.createElement("span", {
                                className: "subtitle"
                            }, "Official Links"), o.a.createElement("h2", {
                                className: "title"
                            }, "Links."), o.a.createElement("div", {
                                className: "im_address_inner"
                            }, o.a.createElement("div", {
                                className: "im_address"
                            }, o.a.createElement("span", null, "Contract:"), o.a.createElement("a", {
                                className: "link im-hover",
                                href: "https://etherscan.io/address/0xeeeb024af0927e2ec0c6e146b77c722b490d6d1d"
                            }, "0xeeeB024Af0927e2Ec0c6e146B77C722B490D6d1d")), o.a.createElement("div", {
                                className: "im_address"
                            }, o.a.createElement("span", null, "Max Supply:"), o.a.createElement("a", {
                                className: "link im-hover",
                                href: "/"
                            }, "100,000 BabyETH")), o.a.createElement("div", {
                                className: "im_address"
                            }, o.a.createElement("span", null, "Liquidity Lock:"), o.a.createElement("a", {
                                className: "link im-hover",
                                href: "/"
                            }, "Unicrypt 1 Year LP Lock"))))), o.a.createElement("div", {
                                className: "col-lg-6 order-1 order-lg-2"
                            }, o.a.createElement("div", {
                                className: "thumbnail mb_md--30 mb_sm--30"
                            }, o.a.createElement("img", {
                                src: "".concat(this.props.contactImages),
                                alt: "trydo"
                            }))))))
                        }
                    }]), a
                }(i.Component),
                A = a(2),
                S = [{
                    image: o.a.createElement("img", {
                        src: "/assets/images/portfolio/portfolio-4.jpg",
                        alt: "React Creative Agency"
                    }),
                    category: "Launch",
                    title: "Select Token",
                    description: "Lorem ipsum dolor sit ametconse ctetur adipiscing elit."
                }, {
                    image: o.a.createElement("img", {
                        src: "/assets/images/portfolio/portfolio-5.jpg",
                        alt: "React Creative Agency"
                    }),
                    category: "Product Design",
                    title: "Enter Contract",
                    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
                }, {
                    image: o.a.createElement("img", {
                        src: "/assets/images/portfolio/portfolio-6.jpg",
                        alt: "React Creative Agency"
                    }),
                    category: "Application",
                    title: "Swap",
                    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
                }, {
                    image: o.a.createElement("img", {
                        src: "/assets/images/portfolio/portfolio-7.jpg",
                        alt: "React Creative Agency"
                    }),
                    category: "Web Design",
                    title: "Website Design",
                    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
                }, {
                    image: o.a.createElement("img", {
                        src: "/assets/images/portfolio/portfolio-8.jpg",
                        alt: "React Creative Agency"
                    }),
                    category: "Application",
                    title: "Web Application",
                    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
                }, {
                    image: o.a.createElement("img", {
                        src: "/assets/images/portfolio/portfolio-9.jpg",
                        alt: "React Creative Agency"
                    }),
                    category: "Photoshop",
                    title: "Photo Editing",
                    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
                }],
                O = (i.Component, a(45)),
                R = [{
                    icon: o.a.createElement(E.h, null),
                    title: "Redistribution Rewards",
                    description: "Earn by simply holding $BETH with tokens airdropped directly to your wallet with each transaction. Benefitting all holders."
                }, {
                    icon: o.a.createElement(E.e, null),
                    title: "Dynamic Buybacks",
                    description: "Whenever a sell occurs, our contract will buy back more $BETH and burn the tokens, sustaining momentum and making number go up"
                }, {
                    icon: o.a.createElement(E.d, null),
                    title: "Anti-Bot Protection",
                    description: "$BETH is protected from bot manipulation from frontrunning bots and also preventing buyback manipulation through dynamic fees and anti spam."
                }, {
                    icon: o.a.createElement(E.i, null),
                    title: "Dynamic Fees",
                    description: "To prevent price manipulation from whales, selling fees are scaled depending on their price impact. After a buyback, Liquidity fee will be lowered in favour of the redistribution fee. "
                }, {
                    icon: o.a.createElement(E.f, null),
                    title: "Liquidity Locked",
                    description: "All initial LP tokens were locked immediately meaning this contract is rug-proof and funds are SAFU."
                }, {
                    icon: o.a.createElement(O.a, null),
                    title: "Deflationary Mechanics",
                    description: "The initial burn created a blackhole that sucks token distribution taxes, every single buyback is also Smart Contract, making this a heavy deflationary token."
                }],
                P = function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a() {
                        return Object(l.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(n.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.column,
                                t = R.slice(0, this.props.item);
                            return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: "row service-main-wrapper"
                            }, t.map((function(t, a) {
                                return o.a.createElement("div", {
                                    className: "".concat(e),
                                    key: a
                                }, o.a.createElement("a", null, o.a.createElement("div", {
                                    className: "service service__style--2 text-left bg-gray"
                                }, o.a.createElement("div", {
                                    className: "icon"
                                }, t.icon), o.a.createElement("div", {
                                    className: "content"
                                }, o.a.createElement("h3", {
                                    className: "title"
                                }, t.title), o.a.createElement("p", null, t.description)))))
                            }))))
                        }
                    }]), a
                }(i.Component),
                D = [{
                    images: "01",
                    title: "What is the Difference between Web and Brand.",
                    category: "App Burned"
                }, {
                    images: "02",
                    title: "A big ticket gone to be an interesting look New York.",
                    category: "React App"
                }, {
                    images: "03",
                    title: "Getting tickets to the big show have a closer look.",
                    category: "Photoshop"
                }, {
                    images: "04",
                    title: " Getting tickets to the big show",
                    category: "Burned"
                }, {
                    images: "05",
                    title: "A big ticket gone to be an interesting ",
                    category: "Management"
                }, {
                    images: "06",
                    title: "The Home of the Future Could Bebes",
                    category: "Design"
                }, {
                    images: "07",
                    title: "The Home of the Future Could Bebes",
                    category: "Design"
                }],
                B = a(3),
                F = (a(78), function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a() {
                        return Object(l.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(n.a)(a, [{
                        key: "render",
                        value: function() {
                            return o.a.createElement(B.a, {
                                className: "accodion-style--1",
                                preExpanded: "0"
                            }, o.a.createElement(B.b, null, o.a.createElement(B.d, null, o.a.createElement(B.c, null, o.a.createElement(B.f, null, (function(e) {
                                return o.a.createElement("span", null, e.expanded ? o.a.createElement(E.a, {
                                    size: "20px",
                                    color: "green"
                                }) : o.a.createElement(E.b, {
                                    size: "20px",
                                    color: "green"
                                }), " ", "How much slippage should I use?")
                            })))), o.a.createElement(B.e, null, o.a.createElement("p", null, "21% slippage minimum buying on the first day. ", o.a.createElement("br", null), "The slippage for buys will reduce after that."), o.a.createElement("p", null, "As for selling, because the fees are dynamic depending on price impact. ", o.a.createElement("br", null), "This can change depending on the market conditions, but start with 20% and work your way up"))), o.a.createElement(B.b, null, o.a.createElement(B.d, null, o.a.createElement(B.c, null, o.a.createElement(B.f, null, (function(e) {
                                return o.a.createElement("span", {
                                    className: "no-underline"
                                }, e.expanded ? o.a.createElement(E.a, {
                                    size: "20px",
                                    color: "green"
                                }) : o.a.createElement(E.b, {
                                    size: "20px",
                                    color: "green"
                                }), " ", "How do I buy?")
                            })))), o.a.createElement(B.e, null, o.a.createElement("p", null, "Download Metamask and set up a wallet if you haven\u2019t already. Send some Ethereum to your new wallet address in order to ensure you have the funds and gas necessary to swap for $BETH.", o.a.createElement("br", null), o.a.createElement("br", null), "You can acquire Ethereum through Coinbase, as well as an increasing number of institutions. Just make sure it is ETH that can be sent to an external wallet, and not simply a pegged asset as seen on platforms like PayPal and Robinhood.", o.a.createElement("br", null), o.a.createElement("br", null), "Click the buy button on the top-right of this page and you will be directed to UniSwap where you can trade Ethereum and other ERC-20 tokens directly for $BETH.", o.a.createElement("br", null), o.a.createElement("br", null), "$BETH will be listing on centralized platforms as well, stay tuned!"))), o.a.createElement(B.b, null, o.a.createElement(B.d, null, o.a.createElement(B.c, null, o.a.createElement(B.f, null, (function(e) {
                                return o.a.createElement("span", null, e.expanded ? o.a.createElement(E.a, {
                                    size: "20px",
                                    color: "green"
                                }) : o.a.createElement(E.b, {
                                    size: "20px",
                                    color: "green"
                                }), " ", "What are the plans for marketing?")
                            })))), o.a.createElement(B.e, null, o.a.createElement("p", null, "From promotional ads on your favorite charting service to any nameable social media platform (Facebook, Reddit, Twitter, etc.) $BETH won\u2019t be hard to find.", o.a.createElement("br", null), o.a.createElement("br", null), "As the holder count continues to grow, we have numerous plans to keep raising this token to the next tier, so expect the marketing to meet the moment."))), o.a.createElement(B.b, null, o.a.createElement(B.d, null, o.a.createElement(B.c, null, o.a.createElement(B.f, null, (function(e) {
                                return o.a.createElement("span", null, e.expanded ? o.a.createElement(E.a, {
                                    size: "20px",
                                    color: "green"
                                }) : o.a.createElement(E.b, {
                                    size: "20px",
                                    color: "green"
                                }), " ", "What makes BabyETH different?")
                            })))), o.a.createElement(B.e, null, o.a.createElement("p", null, "BabyETH improves on the initial buyback contracts by  adding dynamic buyback mechanics dependent on Price Impact contributing to building a healthier price floor", o.a.createElement("br", null), o.a.createElement("br", null), "The problem with the original static buyback contracts is that they were easily exploitable by spam transactions or bots, that would be able to quickly drain the buyback contract BabyETH adds bot protection and spam protection, preventing the buyback mechanics from being abused."))), o.a.createElement(B.b, null, o.a.createElement(B.d, null, o.a.createElement(B.c, null, o.a.createElement(B.f, null, (function(e) {
                                return o.a.createElement("span", null, e.expanded ? o.a.createElement(E.a, {
                                    size: "20px",
                                    color: "green"
                                }) : o.a.createElement(E.b, {
                                    size: "20px",
                                    color: "green"
                                }), " ", "Why not renounce ownership?")
                            })))), o.a.createElement(B.e, null, o.a.createElement("p", null, "In order to keep BabyETH malleable to the trends of the market and ensure that the buyback wallet is properly tuned for the situation, much like EverRise, ownership of the contract must remain in the team\u2019s hands.", o.a.createElement("br", null), o.a.createElement("br", null), "However, this is subject to change as BabyETH continues to grow and new options present themselves as far as automating the contract and giving the community full control of what BabyETH can become."))), o.a.createElement(B.b, null, o.a.createElement(B.d, null, o.a.createElement(B.c, null, o.a.createElement(B.f, null, (function(e) {
                                return o.a.createElement("span", null, e.expanded ? o.a.createElement(E.a, {
                                    size: "20px",
                                    color: "green"
                                }) : o.a.createElement(E.b, {
                                    size: "20px",
                                    color: "green"
                                }), " ", "Is the buyback system exploitable?")
                            })))), o.a.createElement(B.e, null, o.a.createElement("p", null, "No. By adding a buyback threshold preventing buybacks from being greater than the triggering sale, there is no way to force buybacks without incurring severe losses to transaction taxes, a portion of which reflects to all holders of $BETH.", o.a.createElement("br", null), o.a.createElement("br", null), "Furthermore, buybacks cannot be triggered more than once every three seconds, protecting it from being triggered by spamming transactions.", o.a.createElement("br", null), "Measures where taken so that fees have a maximum settable value 20%, preventing us from abusing that mechanic."))))
                        }
                    }]), a
                }(i.Component)),
                _ = [{
                    textPosition: "text-left",
                    category: "Frictionless Yield",
                    description: "",
                    buttonText: "Buy $BETH",
                    buttonLink: ""
                }],
                q = function() {
                    D.slice(0, 3);
                    return o.a.createElement("div", {
                        className: "active-dark bg_color--9"
                    }, o.a.createElement(g, {
                        pageTitle: "BabyETH - Frictionless Yield Perfected"
                    }), o.a.createElement(w, {
                        homeLink: "/",
                        logo: "symbol-dark",
                        color: "color-black"
                    }), o.a.createElement("div", {
                        id: "home",
                        className: "fix"
                    }, o.a.createElement("div", {
                        className: "slider-wrapper"
                    }, _.map((function(e, t) {
                        return o.a.createElement("div", {
                            className: "slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg-main1",
                            key: t
                        }, o.a.createElement("div", {
                            className: "container"
                        }, o.a.createElement("div", {
                            className: "row"
                        }, o.a.createElement("div", {
                            className: "col-lg-12"
                        }, o.a.createElement("div", {
                            className: "inner ".concat(e.textPosition)
                        }, e.category ? o.a.createElement("span", null, e.category) : "", o.a.createElement("h1", {
                            className: "title"
                        }, "BabyETH", o.a.createElement("br", null), o.a.createElement(b.a, null, o.a.createElement("span", {
                            className: "loop-text"
                        }, " Dynamic Buyback"), o.a.createElement("span", {
                            className: "loop-text"
                        }, " Reward Distribution"), o.a.createElement("span", {
                            className: "loop-text"
                        }, " Deflationary Model"), o.a.createElement("span", {
                            className: "loop-text"
                        }, " Anti Bot Protection")), " "), o.a.createElement("h2", null, "Built on Ethereum"), e.description ? o.a.createElement("p", {
                            className: "description"
                        }, e.description) : "", e.buttonText ? o.a.createElement("div", {
                            className: "slide-btn mt--30"
                        }, o.a.createElement("a", {
                            className: "btn-default btn-border btn-opacity",
                            href: "#presale"
                        }, e.buttonText)) : "", o.a.createElement("div", {
                            className: "floatimg-wrapper"
                        }, o.a.createElement("img", {
                            className: "floatimg",
                            src: "/assets/images/logo/logo-transparent.png"
                        }), o.a.createElement("div", {
                            className: "shadow"
                        })))))))
                    })))), o.a.createElement("div", {
                        id: "features",
                        className: "fix"
                    }, o.a.createElement("div", {
                        className: "service-area creative-service-wrapper pb--120 bg_color--8"
                    }, o.a.createElement("div", {
                        className: "container"
                    }, o.a.createElement("div", {
                        className: "row"
                    }, o.a.createElement("div", {
                        className: "col-lg-12"
                    }, o.a.createElement("div", {
                        className: "section-title text-center mb--30 mb_sm--0"
                    }, o.a.createElement("span", {
                        className: "subtitle"
                    }, "Frictionless Yield Perfected"), o.a.createElement("h2", {
                        className: "title"
                    }, "Features"), o.a.createElement("p", {
                        className: "description"
                    }, "The right formula on the right network. BabyETH takes buyback smart contracts, ", o.a.createElement("br", null), " makes critical upgrades to it's mechanics, and imports it to the most utilized blockchain network.")))), o.a.createElement("div", {
                        className: "row creative-service"
                    }, o.a.createElement("div", {
                        className: "col-lg-12"
                    }, o.a.createElement(P, {
                        item: "6",
                        column: "col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                    })))))), o.a.createElement("div", {
                        id: "tokenomics",
                        className: "fix"
                    }, o.a.createElement("div", {
                        className: "about-area ptb--120  bg_color--8"
                    }, o.a.createElement("div", {
                        className: "about-wrapper"
                    }, o.a.createElement("div", {
                        className: "container"
                    }, o.a.createElement("div", {
                        className: "row row--35"
                    }, o.a.createElement("div", {
                        className: "col-lg-5"
                    }, o.a.createElement("div", {
                        className: "thumbnail"
                    }, o.a.createElement("img", {
                        className: "w-100",
                        src: "/assets/images/about/about-8.jpg",
                        alt: "About Images"
                    }))), o.a.createElement("div", {
                        className: "col-lg-7"
                    }, o.a.createElement("div", {
                        className: "about-inner inner"
                    }, o.a.createElement("div", {
                        className: "section-title"
                    }, o.a.createElement("span", {
                        className: "subtitle"
                    }, "Fair Distribution"), o.a.createElement("h2", {
                        className: "title mb--20"
                    }, "Tokenomics"), o.a.createElement("p", {
                        className: "description mt_dec--20"
                    }, "With tokenomics designed to protect buyers, through automatic token buybacks from a pool derived from taxes")), o.a.createElement("div", {
                        className: "row mt--40"
                    }, o.a.createElement(L, {
                        tabStyle: "tab-style--1"
                    }))))))))), o.a.createElement("div", {
                        id: "faq",
                        className: "fix"
                    }, o.a.createElement("div", {
                        className: "rn-about-area ptb--80 bg_color--5 shadow1"
                    }, o.a.createElement("div", {
                        className: "container"
                    }, o.a.createElement("div", {
                        className: "row row--35 align-items-center"
                    }, o.a.createElement("div", {
                        className: "col-lg-6"
                    }, o.a.createElement("div", {
                        className: "thumbnail"
                    }, o.a.createElement("img", {
                        className: "w-100",
                        src: "/assets/images/about/faq.gif",
                        alt: "About Images"
                    }))), o.a.createElement("div", {
                        className: "col-lg-6"
                    }, o.a.createElement("div", {
                        className: "about-inner inner"
                    }, o.a.createElement("div", {
                        className: "section-title"
                    }, o.a.createElement("span", {
                        className: "subtitle"
                    }, "Frequently Asked Questions"), o.a.createElement("h2", {
                        className: "title"
                    }, "F.A.Q.")), o.a.createElement("div", {
                        className: "accordion-wrapper mt--30"
                    }, o.a.createElement(F, null)))))))), o.a.createElement("div", {
                        id: "links",
                        className: "fix"
                    }, o.a.createElement("div", {
                        className: "rn-contact-area ptb--80 bg_color--8"
                    }, o.a.createElement(T, {
                        contactImages: "/assets/images/about/links.gif",
                        contactTitle: "Links."
                    }))), o.a.createElement(x, null), o.a.createElement("div", {
                        className: "backto-top"
                    }, o.a.createElement(d.a, {
                        showUnder: 160
                    }, o.a.createElement(E.c, null))))
                },
                I = function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a(e) {
                        var n;
                        return Object(l.a)(this, a), (n = t.call(this, e)).menuTrigger = n.menuTrigger.bind(Object(h.a)(n)), n.CLoseMenuTrigger = n.CLoseMenuTrigger.bind(Object(h.a)(n)), window.addEventListener("load", (function() {
                            console.log("All assets are loaded")
                        })), n
                    }
                    return Object(n.a)(a, [{
                        key: "menuTrigger",
                        value: function() {
                            document.querySelector(".header-wrapper").classList.toggle("menu-open")
                        }
                    }, {
                        key: "CLoseMenuTrigger",
                        value: function() {
                            document.querySelector(".header-wrapper").classList.remove("menu-open")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = document.querySelectorAll(".has-droupdown > a");
                            for (var t in e) e.hasOwnProperty(t) && (e[t].onclick = function() {
                                this.parentElement.querySelector(".submenu").classList.toggle("active"), this.classList.toggle("open")
                            });
                            var a, l = this.props,
                                n = l.logo,
                                r = l.color,
                                c = l.headerPosition;
                            return a = "light" === n ? o.a.createElement("img", {
                                src: "/assets/images/logo/logo-light.png",
                                alt: "Trydo"
                            }) : "dark" === n ? o.a.createElement("img", {
                                src: "/assets/images/logo/logo-dark.png",
                                alt: "Trydo"
                            }) : "symbol-dark" === n ? o.a.createElement("img", {
                                src: "/assets/images/logo/logo-symbol-dark.png",
                                alt: "Trydo"
                            }) : "all-dark" === n ? o.a.createElement("img", {
                                src: "/assets/images/logo/logo-all-dark.png",
                                alt: "Trydo"
                            }) : "symbol-light" === n ? o.a.createElement("img", {
                                src: "/assets/images/logo/logo-symbol-light.png",
                                alt: "Trydo"
                            }) : o.a.createElement("img", {
                                src: "/assets/images/logo/logo.png",
                                alt: "Trydo"
                            }), o.a.createElement("header", {
                                className: "header-area formobile-menu ".concat(c, " ").concat(r)
                            }, o.a.createElement("div", {
                                className: "header-wrapper",
                                id: "header-wrapper"
                            }, o.a.createElement("div", {
                                className: "header-left"
                            }, o.a.createElement("div", {
                                className: "logo"
                            }, o.a.createElement("a", {
                                href: "/"
                            }, a))), o.a.createElement("div", {
                                className: "header-right"
                            }, o.a.createElement("nav", {
                                className: "mainmenunav d-lg-block"
                            }, o.a.createElement("ul", {
                                className: "mainmenu"
                            }, o.a.createElement("li", {
                                className: "has-droupdown"
                            }, o.a.createElement(A.b, {
                                to: "#"
                            }, "Home"), o.a.createElement("ul", {
                                className: "submenu"
                            }, o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/main-demo"
                            }, "Main Demo")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/dark-main-demo"
                            }, "Main Demo Dark")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/personal-portfolio"
                            }, "Personal Portfolio")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/interior-landing"
                            }, "Interior Landing")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/dark-portfolio-landing"
                            }, "Portfolio One Page 02")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/portfolio-home"
                            }, "Minimal Portfolio")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/digital-agency"
                            }, "Digital Agency")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/creative-agency"
                            }, "Creative Agency")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/corporate-business"
                            }, "Corporate Business")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/portfolio-landing"
                            }, "Portfolio One Page")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/creative-landing"
                            }, "Creative Agency Landing")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/business"
                            }, "Business")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/designer-portfolio"
                            }, "Designer Portfolio")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/home-particles"
                            }, "Home Particles")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/studio-agency"
                            }, "Studio Agency")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/startup"
                            }, "Startup")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/creative-portfolio"
                            }, "Creative Portfolio")))), o.a.createElement("li", {
                                className: "has-droupdown"
                            }, o.a.createElement(A.b, {
                                to: "/service"
                            }, "Service"), o.a.createElement("ul", {
                                className: "submenu"
                            }, o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/service"
                            }, "Service")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/service-details"
                            }, "Service Details")))), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/about"
                            }, "About")), o.a.createElement("li", {
                                className: "has-droupdown"
                            }, o.a.createElement(A.b, {
                                to: "#pages"
                            }, "Pages"), o.a.createElement("ul", {
                                className: "submenu"
                            }, o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/blog"
                            }, "Blog List")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/blog-details"
                            }, "Blog Details")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/service"
                            }, "Service")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/service-details"
                            }, "Service Details")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/portfolio"
                            }, "Portfolio")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/portfolio-details"
                            }, "Portfolio Details")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/404"
                            }, "404")))), o.a.createElement("li", {
                                className: "has-droupdown"
                            }, o.a.createElement(A.b, {
                                to: "#"
                            }, "Blocks"), o.a.createElement("ul", {
                                className: "submenu"
                            }, o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/portfolio"
                            }, "Portfolio")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/team"
                            }, "Team")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/service"
                            }, "Service")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/video-popup"
                            }, "Video Popup")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/progressbar"
                            }, "Progressbar")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/gallery"
                            }, "Gallery")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/counters"
                            }, "Counters")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/blog"
                            }, "Blog List")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/clint-logo"
                            }, "Clint Logo")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/contact-form"
                            }, "Contact Form")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/google-map"
                            }, "Google Map")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/columns"
                            }, "Columns")), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/pricing-table"
                            }, "Pricing Table")))), o.a.createElement("li", null, o.a.createElement(A.b, {
                                to: "/contact"
                            }, "Contact")))), o.a.createElement("div", {
                                className: "header-btn"
                            }, o.a.createElement("a", {
                                className: "btn-default btn-border btn-opacity",
                                target: "_blank",
                                href: "https://themeforest.net/checkout/from_item/31405042?license=regular"
                            }, o.a.createElement("span", null, "buy now"))), o.a.createElement("div", {
                                className: "humberger-menu d-block d-lg-none pl--20"
                            }, o.a.createElement("span", {
                                onClick: this.menuTrigger,
                                className: "menutrigger text-white"
                            }, o.a.createElement(E.g, null))), o.a.createElement("div", {
                                className: "close-menu d-block d-lg-none"
                            }, o.a.createElement("span", {
                                onClick: this.CLoseMenuTrigger,
                                className: "closeTrigger"
                            }, o.a.createElement(E.j, null))))))
                        }
                    }]), a
                }(i.Component),
                M = function(e) {
                    Object(r.a)(a, e);
                    var t = Object(c.a)(a);

                    function a() {
                        return Object(l.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(n.a)(a, [{
                        key: "render",
                        value: function() {
                            return o.a.createElement(o.a.Fragment, null, o.a.createElement(I, {
                                headerPosition: "header--transparent",
                                color: "color-white",
                                logo: "logo-light"
                            }), o.a.createElement("div", {
                                className: "error-page-inner bg_color--4"
                            }, o.a.createElement("div", {
                                className: "container"
                            }, o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("div", {
                                className: "col-lg-12"
                            }, o.a.createElement("div", {
                                className: "inner"
                            }, o.a.createElement("h1", {
                                className: "title theme-gradient"
                            }, "404!"), o.a.createElement("h3", {
                                className: "sub-title"
                            }, "Page not found"), o.a.createElement("span", null, "The page you were looking for could not be found."), o.a.createElement("div", {
                                className: "error-button"
                            }, o.a.createElement("a", {
                                className: "btn-default",
                                href: "/"
                            }, "Back To Homepage"))))))), o.a.createElement("div", {
                                className: "backto-top"
                            }, o.a.createElement(d.a, {
                                showUnder: 160
                            }, o.a.createElement(E.c, null))), o.a.createElement(x, null))
                        }
                    }]), a
                }(i.Component),
                W = a(6),
                z = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function H(e, t) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var a = e.installing;
                        null != a && (a.onstatechange = function() {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var U = function(e) {
                Object(r.a)(a, e);
                var t = Object(c.a)(a);

                function a() {
                    return Object(l.a)(this, a), t.apply(this, arguments)
                }
                return Object(n.a)(a, [{
                    key: "render",
                    value: function() {
                        return o.a.createElement(A.a, {
                            basename: "/"
                        }, o.a.createElement(W.c, null, o.a.createElement(W.a, {
                            exact: !0,
                            path: "".concat("", "/"),
                            component: q
                        }), o.a.createElement(W.a, {
                            path: "".concat("", "/404"),
                            component: M
                        }), o.a.createElement(W.a, {
                            component: M
                        })))
                    }
                }]), a
            }(i.Component);
            m.a.render(o.a.createElement(U, null), document.getElementById("root")),
                function(e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var t = "".concat("", "/service-worker.js");
                            z ? (! function(e, t) {
                                fetch(e).then((function(a) {
                                    var l = a.headers.get("content-type");
                                    404 === a.status || null != l && -1 === l.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : H(e, t)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(t, e), navigator.serviceWorker.ready.then((function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                            }))) : H(t, e)
                        }))
                    }
                }()
        }
    },
    [
        [47, 1, 2]
    ]
]);
//# sourceMappingURL=main.ee7d8cbf.chunk.js.map