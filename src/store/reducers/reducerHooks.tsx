

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStateReduced } from '../index';


// Created Custom Hook.

export const useAppSelector: TypedUseSelectorHook<IStateReduced> = useSelector;

