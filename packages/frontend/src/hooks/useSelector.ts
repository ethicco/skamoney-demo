import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { RootState } from '../data/store'

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default useSelector
