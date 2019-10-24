import { Configuration } from './Configuration.js';

const config = new Configuration();

const main = async () => {
  const tokenToSend = process.env.TOKEN_TO_SEND;
  const tokenContract = config.erc20Contract(tokenToSend);

  const balance = await tokenContract.balanceOf(config.walletAddress);
  console.log(await tokenContract.transfer(config.receiver, balance));
  process.exit();
};

main();
