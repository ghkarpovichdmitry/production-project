import { type StateSchema } from 'app/providers/StoreProvider';
import { type Profile } from 'entities/Profile';

export const getProfileFormData = (state: StateSchema): Profile | undefined => state.profile?.form;
