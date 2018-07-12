import web3 from "ethereum/web3";
import AuctionFactory from "ethereum/build/DNAuctionFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(AuctionFactory.interface),
  "0x4C1d61cbdA7749DecAbd44a7e71158111333deD5"
);

export default instance;
