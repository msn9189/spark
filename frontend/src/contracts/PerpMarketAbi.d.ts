/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.69.0
  Forc version: 0.46.1
  Fuel-Core version: 0.20.8
*/

import type {
  BigNumberish,
  BN,
  Bytes,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum, Vec } from "./common";

export enum ErrorInput { AccessDenied = 'AccessDenied', FreeCollateralMoreThanZero = 'FreeCollateralMoreThanZero', InvalidPythFeePayment = 'InvalidPythFeePayment', NoOrdersFound = 'NoOrdersFound', NoMarketFound = 'NoMarketFound', OrdersCantBeMatched = 'OrdersCantBeMatched', NoMarketPriceForMarket = 'NoMarketPriceForMarket' };
export enum ErrorOutput { AccessDenied = 'AccessDenied', FreeCollateralMoreThanZero = 'FreeCollateralMoreThanZero', InvalidPythFeePayment = 'InvalidPythFeePayment', NoOrdersFound = 'NoOrdersFound', NoMarketFound = 'NoMarketFound', OrdersCantBeMatched = 'OrdersCantBeMatched', NoMarketPriceForMarket = 'NoMarketPriceForMarket' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { value: string };
export type AssetIdOutput = AssetIdInput;
export type I64Input = { value: BigNumberish, negative: boolean };
export type I64Output = { value: BN, negative: boolean };
export type MarketPriceChangeEventInput = { price: BigNumberish, token: AssetIdInput };
export type MarketPriceChangeEventOutput = { price: BN, token: AssetIdOutput };
export type MatchEventInput = { order_sell: OrderChangeEventInput, order_buy: OrderChangeEventInput, trade: TradeEventInput };
export type MatchEventOutput = { order_sell: OrderChangeEventOutput, order_buy: OrderChangeEventOutput, trade: TradeEventOutput };
export type OrderInput = { id: string, trader: AddressInput, base_token: AssetIdInput, base_size: I64Input, order_price: BigNumberish };
export type OrderOutput = { id: string, trader: AddressOutput, base_token: AssetIdOutput, base_size: I64Output, order_price: BN };
export type OrderChangeEventInput = { id: string, order: Option<OrderInput> };
export type OrderChangeEventOutput = { id: string, order: Option<OrderOutput> };
export type RawBytesInput = { ptr: BigNumberish, cap: BigNumberish };
export type RawBytesOutput = { ptr: BN, cap: BN };
export type TradeEventInput = { trade_amount: BigNumberish, trade_value: BigNumberish, token: AssetIdInput, price: BigNumberish, matcher: AddressInput };
export type TradeEventOutput = { trade_amount: BN, trade_value: BN, token: AssetIdOutput, price: BN, matcher: AddressOutput };
export type TwapInput = { base_token: AssetIdInput, span: BigNumberish, current_twap: BigNumberish, last_update: BigNumberish };
export type TwapOutput = { base_token: AssetIdOutput, span: BN, current_twap: BN, last_update: BN };

export type PerpMarketAbiConfigurables = {
  OWNER: AddressInput;
  PROXY_ADDRESS: AddressInput;
  DUST: BigNumberish;
  DEBUG_STEP: Option;
};

interface PerpMarketAbiInterface extends Interface {
  functions: {
    debug_increment_timestamp: FunctionFragment;
    get_mark_price: FunctionFragment;
    get_market_price: FunctionFragment;
    get_total_trader_order_base: FunctionFragment;
    get_trader_orders: FunctionFragment;
    get_twaps: FunctionFragment;
    has_active_orders: FunctionFragment;
    match_orders: FunctionFragment;
    open_order: FunctionFragment;
    remove_all_orders: FunctionFragment;
    remove_order: FunctionFragment;
    remove_uncollaterised_orders: FunctionFragment;
    setup_twap: FunctionFragment;
    update_fee_rate: FunctionFragment;
    update_mark_span: FunctionFragment;
    update_market_span: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'debug_increment_timestamp', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_mark_price', values: [AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_market_price', values: [AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_total_trader_order_base', values: [AddressInput, AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_trader_orders', values: [AddressInput, AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_twaps', values: [AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'has_active_orders', values: [AddressInput, AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'match_orders', values: [string, string, Vec<Bytes>]): Uint8Array;
  encodeFunctionData(functionFragment: 'open_order', values: [AddressInput, AssetIdInput, I64Input, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'remove_all_orders', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'remove_order', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'remove_uncollaterised_orders', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'setup_twap', values: [AssetIdInput, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'update_fee_rate', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'update_mark_span', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'update_market_span', values: [BigNumberish]): Uint8Array;

  decodeFunctionData(functionFragment: 'debug_increment_timestamp', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_mark_price', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_market_price', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_total_trader_order_base', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_trader_orders', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_twaps', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'has_active_orders', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'match_orders', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'open_order', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_all_orders', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_order', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_uncollaterised_orders', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'setup_twap', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'update_fee_rate', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'update_mark_span', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'update_market_span', data: BytesLike): DecodedValue;
}

export class PerpMarketAbi extends Contract {
  interface: PerpMarketAbiInterface;
  functions: {
    debug_increment_timestamp: InvokeFunction<[], void>;
    get_mark_price: InvokeFunction<[token: AssetIdInput], BN>;
    get_market_price: InvokeFunction<[token: AssetIdInput], BN>;
    get_total_trader_order_base: InvokeFunction<[trader: AddressInput, base_token: AssetIdInput], I64Output>;
    get_trader_orders: InvokeFunction<[trader: AddressInput, base_token: AssetIdInput], Vec<OrderOutput>>;
    get_twaps: InvokeFunction<[base_token: AssetIdInput], [Option<TwapOutput>, Option<TwapOutput>]>;
    has_active_orders: InvokeFunction<[trader: AddressInput, base_token: AssetIdInput], boolean>;
    match_orders: InvokeFunction<[order_sell_id: string, order_buy_id: string, price_update_data: Vec<Bytes>], void>;
    open_order: InvokeFunction<[trader: AddressInput, base_token: AssetIdInput, base_size: I64Input, order_price: BigNumberish], void>;
    remove_all_orders: InvokeFunction<[], void>;
    remove_order: InvokeFunction<[order_id: string], void>;
    remove_uncollaterised_orders: InvokeFunction<[trader: AddressInput], void>;
    setup_twap: InvokeFunction<[base_token: AssetIdInput, current_twap: BigNumberish], void>;
    update_fee_rate: InvokeFunction<[fee_rate: BigNumberish], void>;
    update_mark_span: InvokeFunction<[mark_span: BigNumberish], void>;
    update_market_span: InvokeFunction<[market_span: BigNumberish], void>;
  };
}
