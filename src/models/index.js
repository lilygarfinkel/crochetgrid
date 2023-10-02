// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Grid } = initSchema(schema);

export {
  Grid
};