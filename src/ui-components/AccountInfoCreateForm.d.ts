/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccountInfoCreateFormInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
};
export declare type AccountInfoCreateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountInfoCreateFormOverridesProps = {
    AccountInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: AccountInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountInfoCreateFormInputValues) => AccountInfoCreateFormInputValues;
    onSuccess?: (fields: AccountInfoCreateFormInputValues) => void;
    onError?: (fields: AccountInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountInfoCreateFormInputValues) => AccountInfoCreateFormInputValues;
    onValidate?: AccountInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccountInfoCreateForm(props: AccountInfoCreateFormProps): React.ReactElement;
