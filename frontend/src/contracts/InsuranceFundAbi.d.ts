/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.69.1
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

import type {Enum, Vec} from "./common";

export enum ErrorInput { InvalidPythFeePayment = 'InvalidPythFeePayment', AccessDenied = 'AccessDenied' }

export enum ErrorOutput { InvalidPythFeePayment = 'InvalidPythFeePayment', AccessDenied = 'AccessDenied' }

export enum ReentrancyErrorInput { NonReentrant = 'NonReentrant' }

export enum ReentrancyErrorOutput { NonReentrant = 'NonReentrant' }

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type I64Input = { value: BigNumberish, negative: boolean };
export type I64Output = { value: BN, negative: boolean };
export type RawBytesInput = { ptr: BigNumberish, cap: BigNumberish };
export type RawBytesOutput = { ptr: BN, cap: BN };

export type InsuranceFundAbiConfigurables = {
    OWNER: string;
    USDC_ADDRESS: string;
    PROXY_ADDRESS: AddressInput;
};

interface InsuranceFundAbiInterface extends Interface {
    functions: {
        deposit: FunctionFragment;
        distribute_fee: FunctionFragment;
        get_insurance_fund_capacity: FunctionFragment;
        repay: FunctionFragment;
        set_distribution_threshold: FunctionFragment;
        set_surplus_beneficiary: FunctionFragment;
    };

    encodeFunctionData(functionFragment: 'deposit', values: []): Uint8Array;

    encodeFunctionData(functionFragment: 'distribute_fee', values: [Vec<Bytes>]): Uint8Array;

    encodeFunctionData(functionFragment: 'get_insurance_fund_capacity', values: []): Uint8Array;

    encodeFunctionData(functionFragment: 'repay', values: []): Uint8Array;

    encodeFunctionData(functionFragment: 'set_distribution_threshold', values: [BigNumberish]): Uint8Array;

    encodeFunctionData(functionFragment: 'set_surplus_beneficiary', values: [AddressInput]): Uint8Array;

    decodeFunctionData(functionFragment: 'deposit', data: BytesLike): DecodedValue;

    decodeFunctionData(functionFragment: 'distribute_fee', data: BytesLike): DecodedValue;

    decodeFunctionData(functionFragment: 'get_insurance_fund_capacity', data: BytesLike): DecodedValue;

    decodeFunctionData(functionFragment: 'repay', data: BytesLike): DecodedValue;

    decodeFunctionData(functionFragment: 'set_distribution_threshold', data: BytesLike): DecodedValue;

    decodeFunctionData(functionFragment: 'set_surplus_beneficiary', data: BytesLike): DecodedValue;
}

export class InsuranceFundAbi extends Contract {
    interface: InsuranceFundAbiInterface;
    functions: {
        deposit: InvokeFunction<[], void>;
        distribute_fee: InvokeFunction<[price_update_data: Vec<Bytes>], BN>;
        get_insurance_fund_capacity: InvokeFunction<[], I64Output>;
        repay: InvokeFunction<[], void>;
        set_distribution_threshold: InvokeFunction<[distribution_threshold: BigNumberish], void>;
        set_surplus_beneficiary: InvokeFunction<[surplus_beneficiary: AddressInput], void>;
    };
}