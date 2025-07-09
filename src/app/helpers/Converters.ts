export class Converters{
    public static StrToStr = 
    (input : string, error : (error : string) => void) => input;
    
    public static StrToNumber = 
    (input : string, error : (error : string) => void) => 
    {
        let result : number = NaN;

        if(input != undefined && input.length > 0)
        {
            result = Number(input);

            if(isNaN(result))
                error(`Unable to convert ${input} to number!`)
        }
        else
        {
            error("Empty field!");
        }

        return result;
    }
  
}