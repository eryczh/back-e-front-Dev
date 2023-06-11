import React, { useState } from 'react';


function Table() {

    const [potencia, setPotencia] = useState(0);
    

    const handleNumeroPotenciaChange = (event) => {
            setPotencia(parseInt(event.target.value));
    }

    const [items, setItems] = useState([
        { id: 1, nome: "Golf GTI", motor: "AE888.", potencia: 230 },
        { id: 2, nome: "A3 2.0", motor: "AE888.", potencia: 230 },
        { id: 3, nome: "RS3", motor: "AE855.", potencia: 400 }
    ]);


    const calcularPotenciaTotal = () => {
        const porcentagemSob = 30.0 / 100;
        const portenciaTotalComNumero = porcentagemSob * potencia;
        return portenciaTotalComNumero;
    }



    const [potenciaTotal, setPotenciaTotal] = useState(0);

    const [itensAdicionados, setItensAdicionados] = useState([]);


    const handleItemAdicionado = (item) => {
        setItensAdicionados([...itensAdicionados, item]);
        setPotenciaTotal(potenciaTotal + item.potencia);
    };

    const handleRemoveItem = (index) => {
        const itemRemovido = itensAdicionados[index];
        const novoItem = [...itensAdicionados];
        novoItem.splice(index, 1);
        setItensAdicionados(novoItem);
        setPotenciaTotal(potenciaTotal - itemRemovido.potencia);
    };


    return (
        <section>
            {/* ... */}
            <div>
                <h1>Carros</h1>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>iD</th>
                                    <th>nome</th>
                                    <th>motor</th>
                                    <th>potencia</th>
                                    <th>Adicionar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.motor}</td>
                                        <td>{item.potencia}</td>
                                        <td><AddButton onClick={() => handleItemAdicionado(item)} /></td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br/>
                    </div>
                {/* ... */}
                <div>
                    <h2>Soma potência</h2>
                    <ul className='item-adicionado'>
                        {itensAdicionados.map((item, index) => (
                            <li key={index}>
                                {item.nome} - cv {item.potencia.toFixed(2)}
                                <RemoveButton onClick={() => handleRemoveItem(index)} />
                            </li>
                        ))}
                        <br/>
                        <li>Total - CV {potenciaTotal.toFixed(2)}</li>
                    </ul>
                    <label htmlFor="tableNumber">Número da potência desejada:</label>
                        <input
                        type="number"
                        id="tableNumber"
                        name="tableNumber"
                        value={potencia}
                        onChange={handleNumeroPotenciaChange}
                        />
                        <input type="button" value="ok" className="submit" onClick={handleNumeroPotenciaChange} />
                        {potencia && <p>Calculo feito!</p>}
                    <p>Estimativa de ganho com reprogramação de ECU: {calcularPotenciaTotal()} cv</p>
                </div>
            </div>
        </section>
    );
}

function AddButton(props) {
    return (
        <img className='button-pedidos' src="images/adicionar.png" alt="Adicionar" onClick={props.onClick} />
    );
}

function RemoveButton(props) {
    return (
        <img className='button-pedidos' src="images/remove.png" alt="Remover" onClick={props.onClick} />
    );
}


function Performance() {
    return (
        <div>
            <Table />
        </div>
    );
}

export default Performance;