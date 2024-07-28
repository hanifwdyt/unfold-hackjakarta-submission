exports.getPercentageDiscount = (initPrice, finalPrice) => {
    if (initPrice <= 0) {
        return "N/A"
    }
    
    const discount = ((initPrice - finalPrice) / initPrice)

    if (discount > 100 || discount < 0) {
        return "N/A"
    }

    return discount
};
