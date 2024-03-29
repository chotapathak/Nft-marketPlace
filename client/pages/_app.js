import '../styles/globals.css';
import { Connector, Provider, chain, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { providers } from 'ethers';
import { UserProvider } from '../Context/Context';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';


// Get environment variables
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

// Pick chains
const chains = defaultChains;
const defaultChain = chain.mainnet;

// Set up connectors
const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    defaultChain.rpcUrls[0];
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        infuraId,
        qrcode: true,
      },
    }),
  ];
};

// Set up providers
const isChainSupported = (chainId) => chains.some((x) => x.id === chainId);

const provider = ({ chainId }) =>
  providers.getDefaultProvider(
    isChainSupported(chainId) ? chainId : defaultChain.id,
    {
      infuraId,
    }
  );
const webSocketProvider = ({ chainId }) =>
  isChainSupported(chainId)
    ? new providers.InfuraWebSocketProvider(chainId, infuraId)
    : undefined;

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider
      autoConnect
      connectors={connectors}
      provider={provider}
      webSocketProvider={webSocketProvider}
      > 
      <UserProvider>
      <Component {...pageProps} />
      </UserProvider>
    </Provider>
    </>
  );
}

export default MyApp;
