

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStateReduced } from '../Store/store';


// Created Custom Hook.

export const useAppSelector: TypedUseSelectorHook<IStateReduced> = useSelector;

