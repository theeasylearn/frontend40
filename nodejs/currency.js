currency = {
    toDollar:function(rupees)
    {
        return rupees * 0.012;
    },
    toEuro:function(rupees)
    {
        return rupees * 0.011;
    },
    toPound:function(rupees)
    {
        return rupees * 0.0089;
    }
}
module.exports = currency;