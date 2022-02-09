// work.ts
import { SomeConstType, SOME_CONST } from './types'

export function doSomething<K extends keyof SomeConstType>(key: K): SomeConstType[K] {
    return SOME_CONST[key]
}