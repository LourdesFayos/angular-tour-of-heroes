export interface Hero {
    id: number;
    name: string;
    power: string;
    alterEgo?: string;
    
}

export class Hero {
    constructor(
        public name: string,
        public power: string,
        public alterEgo?: string
    ) {}

}
