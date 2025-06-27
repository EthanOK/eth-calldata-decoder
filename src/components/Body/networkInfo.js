const networkInfo = [
  {
    chainID: 1,
    name: "Ethereum Mainnet",
    apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
  {
    chainID: 11155111,
    name: "Sepolia Testnet",
    apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
  {
    chainID: 56,
    name: "Binance Smart Chain",
    apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
  {
    chainID: 137,
    name: "Polygon",
    apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
  {
    chainID: 10,
    name: "Optimism",
    apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
  {
    chainID: 8453,
    name: "Base",
    apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
];

export default networkInfo;
