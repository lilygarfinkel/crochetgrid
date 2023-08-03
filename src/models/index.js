// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SavedGrids, AccountInfo } = initSchema(schema);

export {
  SavedGrids,
  AccountInfo
};