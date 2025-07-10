export class FormValidator{
    validArray : boolean[];

    constructor(fieldCount : number)
    {        
        this.validArray = new Array<boolean>(fieldCount);
        this.validArray = this.validArray.fill(false, 0, fieldCount);        
    }

    setValue(index : number, value : boolean)
    {
        this.validArray[index] = value;
    }

    CheckValidArray(start : number, stop : number) : boolean
    {
        for(let i : number = start; i <= stop; ++i)
        {
            if(this.validArray[i] == false)
                return false;
        }

        return true;
    }
}