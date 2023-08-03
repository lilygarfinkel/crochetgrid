import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerSavedGrids = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SavedGrids, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grids?: (string | null)[] | null;
  readonly patterns?: (string | null)[] | null;
  readonly AccountInfo?: AccountInfo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly savedGridsAccountInfoId?: string | null;
}

type LazySavedGrids = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SavedGrids, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grids?: (string | null)[] | null;
  readonly patterns?: (string | null)[] | null;
  readonly AccountInfo: AsyncItem<AccountInfo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly savedGridsAccountInfoId?: string | null;
}

export declare type SavedGrids = LazyLoading extends LazyLoadingDisabled ? EagerSavedGrids : LazySavedGrids

export declare const SavedGrids: (new (init: ModelInit<SavedGrids>) => SavedGrids) & {
  copyOf(source: SavedGrids, mutator: (draft: MutableModel<SavedGrids>) => MutableModel<SavedGrids> | void): SavedGrids;
}

type EagerAccountInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccountInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly SavedGrids?: SavedGrids | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountInfoSavedGridsId?: string | null;
}

type LazyAccountInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccountInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly SavedGrids: AsyncItem<SavedGrids | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountInfoSavedGridsId?: string | null;
}

export declare type AccountInfo = LazyLoading extends LazyLoadingDisabled ? EagerAccountInfo : LazyAccountInfo

export declare const AccountInfo: (new (init: ModelInit<AccountInfo>) => AccountInfo) & {
  copyOf(source: AccountInfo, mutator: (draft: MutableModel<AccountInfo>) => MutableModel<AccountInfo> | void): AccountInfo;
}