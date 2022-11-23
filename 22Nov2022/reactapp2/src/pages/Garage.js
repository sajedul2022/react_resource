function Car(props) {
    return (
        <li className="alert alert-success" >I am a {props.brand}</li>
    )
}

function Garage() {

    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'Toyota' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Sedan' }
    ]
    return (
        <div class="col-sm-8">
            <h1>Who lives in my garage?</h1>

            <ul type="none" >
                {cars.map((x)=> < Car key={x.id} brand={x.brand} /> )}
            </ul>

        </div>
    )
}

export default Garage;