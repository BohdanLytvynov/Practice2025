export type ValidatorResult = {isValid : boolean, error : string}

export class Validators{

    public static ValidateTextEmpty = (input: string) =>{
    let result : ValidatorResult = {isValid: false, error:''}
    if(input.length == 0){        
        result.error = 'Field is empty!';
        result.isValid = false;
    }
    else
    {
        result.isValid = true;
    }
    return result;
  }

  public static ValidateNumberGreaterThenZero = (number : number) =>{
    let result : ValidatorResult = {isValid: false, error:''}
    if(number > 0)
    {
      result.isValid = true;      
    }
    else{
      result.error = "Value must be greater then Zero!";
      result.isValid = false;
    }

    return result;
  }
}
