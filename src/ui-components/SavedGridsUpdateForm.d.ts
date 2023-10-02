/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SavedGrids } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SavedGridsUpdateFormInputValues = {};
export declare type SavedGridsUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SavedGridsUpdateFormOverridesProps = {
    SavedGridsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SavedGridsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SavedGridsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    savedGrids?: SavedGrids;
    onSubmit?: (fields: SavedGridsUpdateFormInputValues) => SavedGridsUpdateFormInputValues;
    onSuccess?: (fields: SavedGridsUpdateFormInputValues) => void;
    onError?: (fields: SavedGridsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SavedGridsUpdateFormInputValues) => SavedGridsUpdateFormInputValues;
    onValidate?: SavedGridsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SavedGridsUpdateForm(props: SavedGridsUpdateFormProps): React.ReactElement;
