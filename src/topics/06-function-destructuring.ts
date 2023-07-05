
interface Product {
    desciption: string;
    price: number;
}

const phone: Product = {
    desciption: 'Nokia A1',
    price: 150.00
}

const tablet: Product = {
    desciption: 'iPad Air',
    price: 250.00
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[];
}

// function taxCalculation( options: TaxCalculationOptions ): number[] {

// aplicando destructuracion a la funcion
// function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation( { tax, products }: TaxCalculationOptions ): [number, number] {
function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const { tax, products } = options;
    let total = 0;

    // options.products.forEach( product => {
    //     total += product.price
    // });

    // aplicando destructuracion
    products.forEach( ({ price }) => {
        total += price
    });

    return [total, total * tax]

}

const shoppingCart = [phone, tablet];
const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// })

// aplicando destruncturacion
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total', total);
console.log('Tax', taxTotal);






export {}