import { RootState } from '../src/reducers/index';

declare global {
    type State = RootState;
}