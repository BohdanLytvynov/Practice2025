export interface EntityBase{
    id : number;
}

export interface ICPU extends EntityBase {
    brand : string;
    name : string;
    clock_frequency : number;
    cache_memory_size : number;
    number_of_cores : number;
    bit_depth : number;    
}