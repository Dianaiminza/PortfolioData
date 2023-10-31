
import './App.css';
import{Layout,Header,Navigation,Content,Drawer}from 'react-mdl';
import Main from './Components/Main';
import{ Link}from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Iminza Portfolio" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/Resume">Resume</Link>
                
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link> 
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
