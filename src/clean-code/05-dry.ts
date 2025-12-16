type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
      
    ) {}

    validateProduct(): boolean {

        for(const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((this[key] as string).length <= 0) throw new Error(`The property ${key} is required`);
                    break;
                case 'number':
                    if ((this[key] as number) <= 0) throw new Error(`The property ${key} must be greater than 0`);
                    break;
                default:
                    throw new Error(`The property ${key} has an invalid type`);
            }
        }
                    
        return true;
    }

    toString() {
        // No DRY - Don't Repeat Yourself
        /*
            if(this.name.length <= 0) throw Error('The name is required');
            if(this.price <= 0) throw Error('The price must be greater than 0');
            if(this.size.length <= 0) throw Error('The size is required');
        */

        // DRY - Don't Repeat Yourself
        if (!this.validateProduct()) return;

        return `Product: ${this.name}`;
    }
}

(() => {
    const bluePants = new Product('Blue Pants', 10, 'M');
    console.log(bluePants.toString());
})();