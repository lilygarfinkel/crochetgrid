/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Grid as Grid0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GridUpdateFormInputValues = {
    fname?: string;
    width?: number;
    height?: number;
    stitch?: number;
    offset?: boolean;
    linebold?: number;
    colors?: string[];
};
export declare type GridUpdateFormValidationValues = {
    fname?: ValidationFunction<string>;
    width?: ValidationFunction<number>;
    height?: ValidationFunction<number>;
    stitch?: ValidationFunction<number>;
    offset?: ValidationFunction<boolean>;
    linebold?: ValidationFunction<number>;
    colors?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GridUpdateFormOverridesProps = {
    GridUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fname?: PrimitiveOverrideProps<TextFieldProps>;
    width?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    stitch?: PrimitiveOverrideProps<TextFieldProps>;
    offset?: PrimitiveOverrideProps<SwitchFieldProps>;
    linebold?: PrimitiveOverrideProps<TextFieldProps>;
    colors?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GridUpdateFormProps = React.PropsWithChildren<{
    overrides?: GridUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    grid?: Grid0;
    onSubmit?: (fields: GridUpdateFormInputValues) => GridUpdateFormInputValues;
    onSuccess?: (fields: GridUpdateFormInputValues) => void;
    onError?: (fields: GridUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GridUpdateFormInputValues) => GridUpdateFormInputValues;
    onValidate?: GridUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GridUpdateForm(props: GridUpdateFormProps): React.ReactElement;
