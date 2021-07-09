import React ,{ Component }from "react";
import { FiCast , FiPercent, FiLayers ,FiRefreshCw, FiTrendingUp, FiCpu,FiLock, FiDollarSign, FiUsers , FiMonitor } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";

const ServiceList = [
    {
        icon: <FiPercent />,
        title: 'Redistribution Rewards',
        description: 'Earn by simply holding $BETH with tokens airdropped directly to your wallet with each transaction. Benefitting all holders.'
    },
    { 
        icon: <FiDollarSign />,
        title: 'Dynamic Buybacks',
        description: 'Whenever a sell occurs, our contract will buy back more $BETH and burn the tokens, sustaining momentum and making number go up'
    },

    {
        icon: <FiCpu />,
        title: 'Anti-Bot Protection',
        description: '$BETH is protected from bot manipulation from frontrunning bots and also preventing buyback manipulation through dynamic fees and anti spam.'
    },
    {
        icon: <FiRefreshCw />,
        title: 'Dynamic Fees',
        description: 'To prevent price manipulation from whales, selling fees are scaled depending on their price impact. After a buyback, Liquidity fee will be lowered in favour of the redistribution fee. '
    },
    {
        icon: <FiLock />,
        title: 'Liquidity Locked',
        description: 'All initial LP tokens were locked immediately meaning this contract is rug-proof and funds are SAFU.'
    },
    { 
        icon: <AiOutlineFire />,
        title: 'Deflationary Mechanics',
        description: 'The initial burn created a blackhole that sucks token distribution taxes, every single buyback is also Smart Contract, making this a heavy deflationary token.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a>
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
