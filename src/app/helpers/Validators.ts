export class Validators{
    public static ValidateTextEmpty = 
    (
    input: any,
    error: (error: string) => void
  ) => {
    if(String(input).length == 0){
        error("Field is Empty!");
        return false;
    }
    else
    {
        return true;
    }
  }
}
