import { type AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

// I've created a useAppDispatch for typing result of api requests
export const useAppDispatch: () => AppDispatch = useDispatch;
