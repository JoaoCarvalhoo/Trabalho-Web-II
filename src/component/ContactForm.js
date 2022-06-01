import React, {useState, useEffect} from 'react'

const ContactForm = (props) => {

    const camposIniciaisDeValores = {
        nomePrato: '',
        descricaoPrato: '',
        precoCustoPrato: '',
        precoCustoVenda: '',
        nomeCozinheiro: '',
        qtdPratosVender: ''
    }

    let [values, setValues] = useState(camposIniciaisDeValores)
    
    useEffect( () => {
        if(props.currentId == '') {
            setValues({
                ...camposIniciaisDeValores
            })
        } else {
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.contactObjects] )


    const manipuladorInput = e => {
        let { name, value} = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addOrdit(values)
    }
    

    return (
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        🍽
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Prato" name="nomePrato" value={values.nomePrato}
                onChange={manipuladorInput}/>
            </div>

            <div className='row'>
                <div className="form-group input-group col-md-12">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            🍽
                        </div>
                    </div>
                    <input className="form-control" placeholder="Descrição Prato" name="descricaoPrato" value={values.descricaoPrato}
                    onChange={manipuladorInput}/>
                </div>
            </div>
            <div className='row'>
                <div className="form-group input-group col-md-12">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            💶
                        </div>
                    </div>
                    <input className="form-control" placeholder="Preço custo Prato" name="precoCustoPrato" value={values.precoCustoPrato}
                    onChange={manipuladorInput}/>
                </div>
            </div>
            <div className='row'>
                <div className="form-group input-group col-md-12">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            💶
                        </div>
                    </div>
                    <input className="form-control" placeholder="Preço venda Prato" name="precoCustoVenda" value={values.precoCustoVenda}
                    onChange={manipuladorInput}/>
                </div>
            </div>
            <div className='row'>
                <div className="form-group input-group col-md-12">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            👨🏿‍🍳
                        </div>
                    </div>
                    <input className="form-control" placeholder="Nome Cozinheiro" name="nomeCozinheiro" value={values.nomeCozinheiro}
                    onChange={manipuladorInput}/>
                </div>
            </div>
            <div className='row'>
                <div className="form-group input-group col-md-12">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            💰
                        </div>
                    </div>
                    <input className="form-control" placeholder="Qtd. Pratos a vender" name="qtdPratosVender" value={values.qtdPratosVender}
                    onChange={manipuladorInput}/>
                </div>
            </div>
            <div className="form-group mt-2">
                <input type="submit" value={props.currentId == '' ? "Salvar" : "Atualizar"} className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default ContactForm