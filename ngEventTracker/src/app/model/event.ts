export class Event {
    id: number;
    category: string;
    fName: string;
    lName: string;
    description: string;
    date: string;

    constructor(id?: number, category?: string, fName?: string, lName?: string, description?: string, date?: string){
        this.id = id;
        this.category = category;
        this.fName = fName;
        this.lName = lName;
        this.description = description;
        this.date = date;
    }
}
