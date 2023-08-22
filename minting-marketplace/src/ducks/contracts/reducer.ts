import * as ethers from 'ethers';

import {
  ContractAddressesType,
  ContractsActionsType,
  ContractsInitialType
} from './contracts.types';
import * as types from './types';

import {
  creditHandlerAbi,
  diamondFactoryAbi,
  diamondMarketplaceAbi,
  erc777Abi,
  factoryAbi,
  minterAbi,
  resaleAbi,
  tokenPurchaserAbi
} from '../../contracts';
import chainData from '../../utils/blockchainData';

const contractAddresses: ContractAddressesType = {
  '0x38': {
    // Binance Mainnet
    factory: '0xc76c3ebEA0aC6aC78d9c0b324f72CA59da36B9df',
    erc777: '0x0Ce668D271b8016a785Bf146e58739F432300B12',
    minterMarketplace: '0xC9eF9902fa24923A17326aDdb7da0E67fF46692a',
    diamondFactory: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0x556a3Db6d800AAA56f8B09E476793c5100705Db5') as string,
    diamondMarketplace: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0x92FBe344513e108B581170E73CFA352B729E47EA') as string,
    resaleMarketplace: undefined,
    tokenPurchaser: undefined,
    creditHandler: undefined
  },
  '0x61': {
    // Binance Testnet
    factory: '0xfaB4B835fBFC671c15e2fDe237c625e82612893F',
    erc777: '0x5b01aBE2DCfaa4C9c80ccE87223c8e21D7Fc9845',
    minterMarketplace: '0xcBA6014452e82eBF98fA2748BBD46f1733a13AdD',
    diamondFactory: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0xA2c57691b8DF0D8479f5f888c69346363D23a49F') as string,
    diamondMarketplace: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0xaCb13B4c527eD6237f7DB6E95Ef71929d1e13DD6') as string,
    resaleMarketplace: '0x166eD118F380dDFe1F4FD3ccc7D2C5CaeCf0AE96',
    tokenPurchaser: undefined,
    creditHandler: undefined
  },
  '0x5': {
    // Ethereum Goerli
    factory: '0x12EF5310499318C90C55077241137Db52189b036',
    erc777: '0x4e6a5B076730954d80e55dDb2d2e7E732B5bAb70',
    minterMarketplace: '0x14ef15A945b6Cae28f4FA3862E41d74E484Cd3B5',
    diamondFactory: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0xEF85370b8F136E2F28eA904bF0dA5acac3D1d74f') as string,
    diamondMarketplace: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0x6B3c06b39Aa1ADe73c625b184326d4837c7a2b64') as string,
    resaleMarketplace: '0x73eDc2F5Fc3F895Dfc6aE8a580a5969640260b79',
    tokenPurchaser: '0x9dCbe7021803eBb3153412Ed719A2d0B887afB8e' as string,
    creditHandler: '0xad78463579Ff43bdC917674c64749c35c7E325f5' as string
  },
  '0x13881': {
    // Matic Mumbai
    factory: '0x72639374fC9e4eec25839080763025A1d3E710EC',
    erc777: '0x1AeAb89553233D1045b506e8DCBFa3df76E18896',
    minterMarketplace: '0x4594D508cDa05D016571082d467889f4629e1f56',
    diamondFactory: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0xbB236Ce48dDCb58adB8665E220FE976bA5d080a5') as string,
    diamondMarketplace: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0x2c8BA9f098CD319a971cE2705F26723c81044Cb0') as string,
    resaleMarketplace: '0x0F08c99070fbebDa7E324596d95635d30D414070',
    tokenPurchaser: undefined,
    creditHandler: undefined
  },
  '0x89': {
    // Matic Mainnet
    factory: '0x74278C22BfB1DCcc3d42F8b71280C25691E8C157',
    erc777: '0x0Ce668D271b8016a785Bf146e58739F432300B12',
    minterMarketplace: '0x781F15a23506CF28539EA057e3f33008E6339E49',
    diamondFactory: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0xeef47e293d01ce29e91707ed2fe8e9b8e3fe75d1') as string,
    diamondMarketplace: (process.env.REACT_APP_DIAMONDS_ENABLED === 'true' &&
      '0x5535fe9abda206f6780cc87b4e1fe4733b98bd9c') as string,
    resaleMarketplace: undefined,
    tokenPurchaser: undefined,
    creditHandler: undefined
  },
  '0x1': {
    // Ethereum Mainnet
    factory: '0xA2A7e7636AB4374847074c147BE770624F43342E',
    erc777: '0xc76c3ebEA0aC6aC78d9c0b324f72CA59da36B9df',
    minterMarketplace: '0x0Ce668D271b8016a785Bf146e58739F432300B12',
    diamondFactory: undefined,
    diamondMarketplace: '0x5c31677c7E73F97020213690F736A8a2Ff922EBC',
    resaleMarketplace: undefined,
    tokenPurchaser: undefined,
    creditHandler: undefined
  },
  '0x250': {
    // Ethereum Mainnet
    factory: undefined,
    erc777: '0x762BbcF6E6486fbee13a5CeE291F7aEE14f1CA77',
    minterMarketplace: undefined,
    diamondFactory: '0x92FBe344513e108B581170E73CFA352B729E47EA',
    diamondMarketplace: '0x2b1FE33Cb7264dBa6331F54012f04133395fDe44',
    resaleMarketplace: undefined,
    tokenPurchaser: undefined,
    creditHandler: '0x6C9Ca38fFb93756a52f0072B72eA3C6769f87892'
  }
};

const InitialState: ContractsInitialType = {
  minterInstance: undefined,
  resaleInstance: undefined,
  factoryInstance: undefined,
  erc777Instance: undefined,
  diamondFactoryInstance: undefined,
  diamondMarketplaceInstance: undefined,
  tokenPurchaserInstance: undefined,
  creditHandlerInstance: undefined,
  currentChain: process.env.REACT_APP_DEFAULT_BLOCKCHAIN as BlockchainType,
  currentUserAddress: undefined,
  programmaticProvider: undefined,
  contractCreator: undefined,
  realChain: undefined
};

export default function userStore(
  state: ContractsInitialType = InitialState,
  action: ContractsActionsType
): ContractsInitialType {
  switch (action.type) {
    case types.SET_CHAIN_ID:
      if (
        action.currentChain !== undefined &&
        contractAddresses[action.currentChain] !== undefined
      ) {
        let signer;
        if (action.oreIdAddress) {
          const data = chainData[action.currentChain];
          if (data?.addChainData.rpcUrls?.at) {
            const provider = new ethers.providers.StaticJsonRpcProvider(
              chainData[action.currentChain]?.addChainData?.rpcUrls?.at(0),
              {
                name: data.name,
                chainId: parseInt(action.currentChain, 16)
              }
            );
            signer = provider.getSigner(action.oreIdAddress);
          }
        } else if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            'any'
          );
          provider.on(
            'debug',
            ({
              // action,
              request,
              response
              // provider
            }) => {
              if (process.env.REACT_APP_LOG_WEB3 === 'true') {
                console.info(
                  response ? 'Receiving response to' : 'Sending request',
                  request.method
                );
              }
            }
          );
          provider.on('network', (newNetwork, oldNetwork) => {
            // When a Provider makes its initial connection, it emits a "network"
            // event with a null oldNetwork along with the newNetwork. So, if the
            // oldNetwork exists, it represents a changing network
            /*
							Example of a network object:
							{
							    "name": "goerli",
							    "chainId": 5,
							    "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
							}
						*/
            if (oldNetwork) {
              console.info(
                `Detected a network change, from ${oldNetwork.name} to ${newNetwork.name}`
              );
            } else {
              console.info(`Connected to ${newNetwork.name}`);
            }
          });
          signer = provider.getSigner(0);
        } else if (state.programmaticProvider) {
          signer = state.programmaticProvider;
        } else {
          return {
            ...state,
            currentChain: action.currentChain,
            web3Provider: undefined,
            minterInstance: undefined,
            factoryInstance: undefined,
            erc777Instance: undefined,
            contractCreator: undefined,
            diamondFactoryInstance: undefined,
            diamondMarketplaceInstance: undefined
          };
        }
        const contractCreator = (address, abi) => {
          if (address) {
            return new ethers.Contract(address, abi, signer);
          }
          return undefined;
        };
        return {
          ...state,
          currentChain: action.currentChain,
          factoryInstance: contractCreator(
            contractAddresses[action.currentChain].factory,
            factoryAbi
          ),
          minterInstance: contractCreator(
            contractAddresses[action.currentChain].minterMarketplace,
            minterAbi
          ),
          resaleInstance: contractCreator(
            contractAddresses[action.currentChain].resaleMarketplace,
            resaleAbi
          ),
          erc777Instance: contractCreator(
            contractAddresses[action.currentChain].erc777,
            erc777Abi
          ),
          diamondFactoryInstance: contractCreator(
            contractAddresses[action.currentChain].diamondFactory,
            diamondFactoryAbi
          ),
          diamondMarketplaceInstance: contractCreator(
            contractAddresses[action.currentChain].diamondMarketplace,
            diamondMarketplaceAbi
          ),
          tokenPurchaserInstance: contractCreator(
            contractAddresses[action.currentChain].tokenPurchaser,
            tokenPurchaserAbi
          ),
          creditHandlerInstance: contractCreator(
            contractAddresses[action.currentChain].creditHandler,
            creditHandlerAbi
          ),
          contractCreator: contractCreator
        };
      } else {
        return {
          ...state,
          currentChain: action.currentChain,
          minterInstance: undefined,
          factoryInstance: undefined,
          erc777Instance: undefined,
          contractCreator: undefined,
          diamondFactoryInstance: undefined,
          diamondMarketplaceInstance: undefined
        };
      }
    case types.SET_USER_ADDRESS:
      // eslint-disable-next-line no-case-declarations
      const update = {
        ...state,
        currentUserAddress: action.currentUserAddress
      };
      if (action.currentUserAddress === undefined) {
        update.currentChain = process.env
          .REACT_APP_DEFAULT_BLOCKCHAIN as BlockchainType;
      }
      return update;
    case types.SET_PROGRAMMATIC_PROVIDER:
      return {
        ...state,
        programmaticProvider: action.programmaticProvider
      };
    case types.SET_REAL_CHAIN:
      return {
        ...state,
        realChain: action.realChain
      };
    default:
      return state;
  }
}
