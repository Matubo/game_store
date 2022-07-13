import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootReducerType } from 'src/redux/store';

export const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector;
