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
  readonly Users?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly savedGridsUsersId?: string | null;
}

type LazySavedGrids = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SavedGrids, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grids?: (string | null)[] | null;
  readonly patterns?: (string | null)[] | null;
  readonly Users: AsyncItem<Users | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly savedGridsUsersId?: string | null;
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
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly Users?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountInfoUsersId?: string | null;
}

type LazyAccountInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccountInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly Users: AsyncItem<Users | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountInfoUsersId?: string | null;
}

export declare type AccountInfo = LazyLoading extends LazyLoadingDisabled ? EagerAccountInfo : LazyAccountInfo

export declare const AccountInfo: (new (init: ModelInit<AccountInfo>) => AccountInfo) & {
  copyOf(source: AccountInfo, mutator: (draft: MutableModel<AccountInfo>) => MutableModel<AccountInfo> | void): AccountInfo;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly SavedGrids?: SavedGrids | null;
  readonly AccountInfo?: AccountInfo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersSavedGridsId?: string | null;
  readonly usersAccountInfoId?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly SavedGrids: AsyncItem<SavedGrids | undefined>;
  readonly AccountInfo: AsyncItem<AccountInfo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersSavedGridsId?: string | null;
  readonly usersAccountInfoId?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}