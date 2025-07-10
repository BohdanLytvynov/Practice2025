export type ConverterResult = {isValid : boolean, error : string, convResult : any};

export class Converters{
       
    public static StrToNumber = 
    (input : string) => 
    {
        let result : ConverterResult = {isValid: false, error: '', convResult: undefined}

        if(input != undefined && input.length > 0)
        {
            let conv = Number(input);

            if(isNaN(conv)){
                result.error = `Unable to convert ${input} to number!`;
                result.isValid = false;
            }
            else{
                result.isValid = true;
                result.convResult = conv;
            }                            
        }
        else
        {
           result.isValid = false;
           result.error = 'The field is empty!'
        }

        return result;
    }
  
}