import { CSSProperties } from 'react';

export interface IAgreementsPropsType {
  presaleMessage: string | React.ReactNode;
  contractAddress?: string;
  requiredBlockchain?: BlockchainType | undefined;
  offerIndex: string[] | undefined;
  connectUserData?: () => void;
  diamond: boolean;
  customSuccessAction?:
    | ((nextToken: number) => void | Promise<void>)
    | undefined;
  blockchainOnly?: boolean;
  databaseOnly?: boolean;
}

export interface IPurchaseTokenButtonProps {
  altButtonFormat?: boolean;
  customButtonClassName?: string;
  customButtonIconClassName?: string;
  customButtonTextClassName?: string;
  customWrapperClassName?: string;
  img?: string;
  contractAddress?: string;
  requiredBlockchain?: BlockchainType | undefined;
  offerIndex?: string[] | undefined;
  buttonLabel?: string;
  connectUserData?: () => void;
  presaleMessage?: string | React.ReactNode;
  diamond: boolean;
  customSuccessAction?: (nextToken: number) => any;
  blockchainOnly?: boolean;
  databaseOnly?: boolean;
}

export interface IRangeDataType {
  start: string;
  end: string;
  product: string;
  price: string;
}
