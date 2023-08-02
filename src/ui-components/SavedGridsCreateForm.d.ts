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
export declare type SavedGridsCreateFormInputValues = {
    grids?: string[];
    patterns?: string[];
};
export declare type SavedGridsCreateFormValidationValues = {
    grids?: ValidationFunction<string>;
    patterns?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SavedGridsCreateFormOverridesProps = {
    SavedGridsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    grids?: PrimitiveOverrideProps<TextFieldProps>;
    patterns?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SavedGridsCreateFormProps = React.PropsWithChildren<{
    overrides?: SavedGridsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SavedGridsCreateFormInputValues) => SavedGridsCreateFormInputValues;
    onSuccess?: (fields: SavedGridsCreateFormInputValues) => void;
    onError?: (fields: SavedGridsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SavedGridsCreateFormInputValues) => SavedGridsCreateFormInputValues;
    onValidate?: SavedGridsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SavedGridsCreateForm(props: SavedGridsCreateFormProps): React.ReactElement;
