import {ICPU} from "../models/interfaces/interfaces"

export enum CPU_Fields{
    Brand = 0, Name, Clock_Frequency, Cache_Memory_Size, Number_Of_Cores, Bit_Depth
}

export class CPU implements ICPU{
    
    constructor(public id : number,
        public brand : string, 
        public name : string,
        public clock_frequency : number,
        public cache_memory_size : number,
        public number_of_cores : number,
        public bit_depth : number,
    )
    {}

    static Init() : CPU{
        return new CPU(-1,'','',0,0,0,0);
    }

    public Update(src : CPU) : void{
        this.name = src.name;
        this.brand = src.brand;
        this.number_of_cores = src.number_of_cores;
        this.clock_frequency = src.clock_frequency;
        this.cache_memory_size = src.cache_memory_size;
        this.bit_depth = src.bit_depth;
    }
}