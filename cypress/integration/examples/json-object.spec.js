describe('Json Objects', () => {
    it('Json Objects', () => {
        const simpleObject = {"key1": "value1", "key2": "value2"}
        const simpleArrayOfValues = ["one", "two", "three"]
        const arrayOfObjects = [{"key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]
        const typesOfData = {"string": "this is string", "number": 10}

        const mix = {
            "FirstName": "Guy",
            "LastName": "Bitan",
            "Age": 35,
            "Students": [
                {
                    "FirstName": "Sara",
                    "LastName": "Conor"
                },
                {
                    "FirstName": "Moshe",
                    "LastName": "Willis"
                }
            ]
        }
        console.log(simpleObject.key1)
        console.log(simpleObject["key2"])
        console.log(simpleArrayOfValues[1])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Students[0].FirstName)
    })
})
