// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SavedGrids, AccountInfo, Users } = initSchema(schema);

export {
  SavedGrids,
  AccountInfo,
  Users
};