export class DOMHelper{
    private static typeName : string = 'DOMHelper'

    public static getElement(root : any, query: string) : any
    {
        if(root == undefined) throw new Error(`${this.typeName} getElement(). Root was undefined!`);

        if(query == undefined || query.length == 0) 
            throw new Error(`${this.typeName} getElement(). Query was undefined or empty!`);

        return root.querySelector(query);
    }

    public static AddClass(className : string, element : any)
    {
        if(element == undefined) 
            throw new Error(`${this.typeName} AddClass(). Element was undefined!`);

        if(!element.classList.contains(className))
            element.classList.add(className);
    }

    public static RemoveClass(className : string, element : any)
    {
        if(element == undefined) 
            throw new Error(`${this.typeName} RemoveClass(). Element was undefined!`);

        if(element.classList.contains(className))
            element.classList.remove(className);
    }

    public static ReplaceClass(oldClassName : string, newClassname : string, element : any)
    {
        this.RemoveClass(oldClassName, element);
        this.AddClass(newClassname, element);
    }
}