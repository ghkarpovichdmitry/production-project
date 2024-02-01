import { type Profile } from 'entities/Profile';
import { type StateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (state: StateSchema): Profile | undefined => state.profile?.data;
