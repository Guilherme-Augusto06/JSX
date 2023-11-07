const App = () => {
    const [produto, setProduto] = React.useState('Camisa Vermelha');
    const [preco, setPreco] = React.useState(59.99);
    const [quantidade, setQuantidade] = React.useState(0);
    const [quantidadeTemp, setQuantidadeTemp] = React.useState(0);
    const [valorTotal, setValorTotal] = React.useState(0);

    const cardStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    const imageStyle = {
        width: '50%',
        height: 'auto',
    };

    const textContainerStyle = {
        flex: '1',
        padding: '15px',
        textAlign: 'left',
        
    };

    const buttonStyle = {
        margin: '10px 0',
    };

    const cartIconStyle = {
        fontSize: '24px',
        verticalAlign: 'middle',
    };

    const blackButtonStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        // Espaçamento entre os botões
        margin: '0 5px',

    };

    const quantityStyle = {
        padding: '0 10px', // Espaçamento entre o número e os botões
    };

    const handleAddToCart = () => {
        setQuantidade(quantidade + quantidadeTemp);
        setValorTotal(valorTotal + quantidadeTemp * preco);
        setQuantidadeTemp(0);
    };

    const handleIncrement = () => {
        setQuantidadeTemp(quantidadeTemp + 1);
    };

    const handleDecrement = () => {
        if (quantidadeTemp > 0) {
            setQuantidadeTemp(quantidadeTemp - 1);
        }
    };

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Minha Loja</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16" style={cartIconStyle}>
                        <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                    <span className="badge badge-primary">{quantidade}</span>
                </div>
            </nav>

            <div className="card" style={cardStyle}>
                <img
                    src="./img/camisa-vermelha.jpg"
                    className="card-img-top"
                    alt={produto}
                    style={imageStyle}
                />
                <div style={textContainerStyle}>
                    <p className="card-text">
                        R$ {preco.toFixed(2)}
                    </p>
                    <h5 className="card-title">{produto}</h5>
                    <p className="card-text">
                        Essa é uma camisa vermelha feita de algodão com detalhes preto e vermelho.
                    </p>
  
                    <div className="btn-group" style={{ justifyContent: 'center' }}>
                        <button className="btn btn-dark" style={blackButtonStyle} onClick={handleDecrement}>
                            -
                        </button>
                        <span style={quantityStyle}>{quantidadeTemp}</span>
                        <button className="btn btn-dark" style={blackButtonStyle} onClick={handleIncrement}>
                            +
                        </button>
                    </div>
                    <button className="btn btn-primary" style={{ ...buttonStyle, ...blackButtonStyle }} onClick={handleAddToCart}>
                        Adicionar ao Carrinho
                    </button>
                    <p>Valor Total: R$ {valorTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
