import {CPU as ICPU} from "../models/interfaces/interfaces"

export class CPU implements ICPU{
    
    constructor(public brand : string, 
        public clock_frequency : number,
        public cache_memory_size : number,
        public number_of_cores : number,
        public bit_depth : number,
    )
    {}
}