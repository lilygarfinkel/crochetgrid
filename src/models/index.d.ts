import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerGrid = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grid, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly width: number;
  readonly height: number;
  readonly stitch: number;
  readonly offset: boolean;
  readonly linebold: number;
  readonly colors: string[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrid = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grid, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly width: number;
  readonly height: number;
  readonly stitch: number;
  readonly offset: boolean;
  readonly linebold: number;
  readonly colors: string[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grid = LazyLoading extends LazyLoadingDisabled ? EagerGrid : LazyGrid

export declare const Grid: (new (init: ModelInit<Grid>) => Grid) & {
  copyOf(source: Grid, mutator: (draft: MutableModel<Grid>) => MutableModel<Grid> | void): Grid;
}