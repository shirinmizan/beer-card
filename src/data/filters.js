const filters = [
    {id: 1, text: "High ABV (>6/0%)", field: "abv", operator: ">", value: 6 },
    {id: 2, text: "Classic Range", field: "first_brewed", operator: "<", value: 2010 },
    {id: 3, text: "Acidic (ph < 4)", field: "ph", operator: "<", value: 4 }
]
export default filters;