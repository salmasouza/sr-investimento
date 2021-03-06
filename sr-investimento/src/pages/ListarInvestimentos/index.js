import 'antd/dist/antd.css';
import {Table, Button, message, Layout, Menu} from 'antd';
import { render } from '@testing-library/react';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const {Header, Content, Footer} = Layout;
const {Column} = Table;

export default function ListarInvestimentos(){
    const [investimentos, setInvestimentos]= useState([]);

    function remove(record){
        message.success('Investimento removido com sucesso!');
    }


    return(
        <div classsName="container">
        <Layout className="Layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <Link to="/cadastrar-investimento">
                        Cadastrar Investimento
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/listar-investimentos">
                        Listar Investimentos
                    </Link>
                </Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <h2>INVESTIMENTOS</h2>
                    <Table dataSource={investimentos}>
                        <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtvio" />
                        <Column title="Valor" dataIndex="valor" key="valor" />
                        <Column title="Quantidade Cotas" dataIndex="quantidadeCota" key="quantidadeCota" />
                        <Column title="Data de Compra" dataIndex="dataCompra" key="dataCompra" />
                        <Column title="Remover" key="atualizar"
                            render={(text, record) => (<Button onClick={()=> remove(record)} 
                            type="primary">Remover</Button>)} 
                        />
                        
                    </Table>
            </div>
      
            </Content>
        <Footer style={{ textAlign: 'center' }}>My Invest @2021</Footer>
        </Layout>
        </div>
    );      
} 



