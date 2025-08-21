module.exports = function(items) {
     let foundSpecialProduct = false;
     const totalPrice = items.map(item => {
             const { id, precoUnitario, quantidadeVendida } = item;
             if (id === 'XP-0101')foundSpecialProduct = true;     
             return precoUnitario * quantidadeVendida;
        }).reduce((a, b) => a + b, 0);
        if(foundSpecialProduct) return totalPrice * 0.2;
        if(totalPrice < 1999.99) return totalPrice * 0.05;
        if(totalPrice > 1999.99 && totalPrice < 4999.99) return totalPrice * 0.1;
        if(totalPrice > 4999.99) return totalPrice * 0.15;
    };   
