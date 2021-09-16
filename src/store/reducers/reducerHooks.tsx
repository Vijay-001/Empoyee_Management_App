import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStateReduced } from '../index';

// Created Custom Hook.

const useAppSelector: TypedUseSelectorHook<IStateReduced> = useSelector;

export default useAppSelector;
